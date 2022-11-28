import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAdConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ad_id" })
  adId: number;
}


export class UpdateAdConfigHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateAdConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAdConfigPathParams;

  @SpeakeasyMetadata()
  headers: UpdateAdConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateActiveDirectoryConfigRequest;
}


export class UpdateAdConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activeDirectoryConfig?: shared.ActiveDirectoryConfig;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
