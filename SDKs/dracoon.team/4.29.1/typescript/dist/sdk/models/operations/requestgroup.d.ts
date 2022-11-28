import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestGroupPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class RequestGroupHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestGroupRequest extends SpeakeasyBase {
    pathParams: RequestGroupPathParams;
    headers: RequestGroupHeaders;
}
export declare class RequestGroupResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    group?: shared.Group;
    statusCode: number;
}
