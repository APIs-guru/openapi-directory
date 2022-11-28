import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUserAttributesPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class UpdateUserAttributesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class UpdateUserAttributesRequest extends SpeakeasyBase {
    pathParams: UpdateUserAttributesPathParams;
    headers: UpdateUserAttributesHeaders;
    request: shared.UserAttributes;
}
export declare class UpdateUserAttributesResponseOutput extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    userData?: shared.UserDataOutput;
}
