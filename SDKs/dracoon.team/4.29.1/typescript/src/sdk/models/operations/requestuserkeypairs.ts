import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestUserKeyPairsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestUserKeyPairsRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestUserKeyPairsHeaders;
}


export class RequestUserKeyPairsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.UserKeyPairContainer })
  userKeyPairContainers?: shared.UserKeyPairContainer[];
}
