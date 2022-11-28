import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetProfileAttributesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class SetProfileAttributesRequest extends SpeakeasyBase {
    headers: SetProfileAttributesHeaders;
    request: shared.ProfileAttributesRequest;
}
export declare class SetProfileAttributesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    profileAttributes?: shared.ProfileAttributes;
    statusCode: number;
}
