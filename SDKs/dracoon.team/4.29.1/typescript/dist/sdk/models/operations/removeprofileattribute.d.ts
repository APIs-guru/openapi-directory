import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveProfileAttributePathParams extends SpeakeasyBase {
    key: string;
}
export declare class RemoveProfileAttributeHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RemoveProfileAttributeRequest extends SpeakeasyBase {
    pathParams: RemoveProfileAttributePathParams;
    headers: RemoveProfileAttributeHeaders;
}
export declare class RemoveProfileAttributeResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
