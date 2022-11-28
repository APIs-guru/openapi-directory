import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveRadiusConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RemoveRadiusConfigRequest extends SpeakeasyBase {
    headers: RemoveRadiusConfigHeaders;
}
export declare class RemoveRadiusConfigResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
