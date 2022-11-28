import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestRadiusConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class TestRadiusConfigRequest extends SpeakeasyBase {
    headers: TestRadiusConfigHeaders;
}
export declare class TestRadiusConfigResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
