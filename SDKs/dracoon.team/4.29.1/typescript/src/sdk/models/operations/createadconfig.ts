import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAdConfigHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class CreateAdConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateAdConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateActiveDirectoryConfigRequest;
}


export class CreateAdConfigResponse extends SpeakeasyBase {
  @Metadata()
  activeDirectoryConfig?: shared.ActiveDirectoryConfig;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
