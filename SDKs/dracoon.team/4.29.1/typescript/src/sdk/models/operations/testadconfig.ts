import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TestAdConfigHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class TestAdConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: TestAdConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TestActiveDirectoryConfigRequest;
}


export class TestAdConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  testActiveDirectoryConfigResponse?: shared.TestActiveDirectoryConfigResponse;
}
