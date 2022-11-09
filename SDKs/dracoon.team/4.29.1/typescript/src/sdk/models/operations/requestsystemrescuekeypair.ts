import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestSystemRescueKeyPairQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string;
}


export class RequestSystemRescueKeyPairHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestSystemRescueKeyPairRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RequestSystemRescueKeyPairQueryParams;

  @Metadata()
  headers: RequestSystemRescueKeyPairHeaders;
}


export class RequestSystemRescueKeyPairResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  userKeyPairContainer?: shared.UserKeyPairContainer;
}
