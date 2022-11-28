import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestUserPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class RequestUserQueryParams extends SpeakeasyBase {
    effectiveRoles?: boolean;
}
export declare class RequestUserHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestUserRequest extends SpeakeasyBase {
    pathParams: RequestUserPathParams;
    queryParams: RequestUserQueryParams;
    headers: RequestUserHeaders;
}
export declare class RequestUserResponseOutput extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    userData?: shared.UserDataOutput;
}
