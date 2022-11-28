import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestAdConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class TestAdConfigRequest extends SpeakeasyBase {
    headers: TestAdConfigHeaders;
    request: shared.TestActiveDirectoryConfigRequest;
}
export declare class TestAdConfigResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    testActiveDirectoryConfigResponse?: shared.TestActiveDirectoryConfigResponse;
}
