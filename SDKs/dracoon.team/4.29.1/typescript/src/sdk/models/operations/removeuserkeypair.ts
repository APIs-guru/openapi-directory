import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveUserKeyPairQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string;
}


export class RemoveUserKeyPairHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RemoveUserKeyPairRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RemoveUserKeyPairQueryParams;

  @Metadata()
  headers: RemoveUserKeyPairHeaders;
}


export class RemoveUserKeyPairResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
