import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAdConfigHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class CreateAdConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateAdConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateActiveDirectoryConfigRequest;
}


export class CreateAdConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activeDirectoryConfig?: shared.ActiveDirectoryConfig;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
