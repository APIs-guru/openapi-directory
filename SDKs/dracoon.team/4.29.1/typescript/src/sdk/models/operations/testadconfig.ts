import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TestAdConfigHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class TestAdConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: TestAdConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.TestActiveDirectoryConfigRequest;
}


export class TestAdConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  testActiveDirectoryConfigResponse?: shared.TestActiveDirectoryConfigResponse;
}
