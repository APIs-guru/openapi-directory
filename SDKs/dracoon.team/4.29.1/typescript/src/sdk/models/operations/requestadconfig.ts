import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestAdConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ad_id" })
  adId: number;
}


export class RequestAdConfigHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestAdConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestAdConfigPathParams;

  @Metadata()
  headers: RequestAdConfigHeaders;
}


export class RequestAdConfigResponse extends SpeakeasyBase {
  @Metadata()
  activeDirectoryConfig?: shared.ActiveDirectoryConfig;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
