import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAndPreserveKeyPairHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class CreateAndPreserveKeyPairRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateAndPreserveKeyPairHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateKeyPairRequest;
}


export class CreateAndPreserveKeyPairResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
