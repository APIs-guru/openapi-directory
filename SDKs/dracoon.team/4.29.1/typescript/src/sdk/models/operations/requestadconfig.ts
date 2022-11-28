import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestAdConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ad_id" })
  adId: number;
}


export class RequestAdConfigHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestAdConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestAdConfigPathParams;

  @SpeakeasyMetadata()
  headers: RequestAdConfigHeaders;
}


export class RequestAdConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activeDirectoryConfig?: shared.ActiveDirectoryConfig;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
