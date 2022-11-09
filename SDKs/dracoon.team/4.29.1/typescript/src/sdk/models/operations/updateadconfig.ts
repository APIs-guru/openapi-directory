import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAdConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ad_id" })
  adId: number;
}


export class UpdateAdConfigHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateAdConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateAdConfigPathParams;

  @Metadata()
  headers: UpdateAdConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateActiveDirectoryConfigRequest;
}


export class UpdateAdConfigResponse extends SpeakeasyBase {
  @Metadata()
  activeDirectoryConfig?: shared.ActiveDirectoryConfig;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
