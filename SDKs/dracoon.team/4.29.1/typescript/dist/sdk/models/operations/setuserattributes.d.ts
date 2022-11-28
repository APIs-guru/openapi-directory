import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetUserAttributesPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class SetUserAttributesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class SetUserAttributesRequest extends SpeakeasyBase {
    pathParams: SetUserAttributesPathParams;
    headers: SetUserAttributesHeaders;
    request: shared.UserAttributes;
}
export declare class SetUserAttributesResponseOutput extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    userData?: shared.UserDataOutput;
}
