import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveUserAttributePathParams extends SpeakeasyBase {
    key: string;
    userId: number;
}
export declare class RemoveUserAttributeHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RemoveUserAttributeRequest extends SpeakeasyBase {
    pathParams: RemoveUserAttributePathParams;
    headers: RemoveUserAttributeHeaders;
}
export declare class RemoveUserAttributeResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
