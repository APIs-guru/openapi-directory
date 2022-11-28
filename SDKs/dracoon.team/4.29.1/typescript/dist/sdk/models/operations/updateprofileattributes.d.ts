import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateProfileAttributesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class UpdateProfileAttributesRequest extends SpeakeasyBase {
    headers: UpdateProfileAttributesHeaders;
    request: shared.ProfileAttributesRequest;
}
export declare class UpdateProfileAttributesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    profileAttributes?: shared.ProfileAttributes;
    statusCode: number;
}
