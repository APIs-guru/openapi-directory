import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestAdConfigsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestAdConfigsRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestAdConfigsHeaders;
}


export class RequestAdConfigsResponse extends SpeakeasyBase {
  @Metadata()
  activeDirectoryConfigList?: shared.ActiveDirectoryConfigList;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
