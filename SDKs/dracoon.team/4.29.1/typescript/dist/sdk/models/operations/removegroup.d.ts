import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveGroupPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class RemoveGroupHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RemoveGroupRequest extends SpeakeasyBase {
    pathParams: RemoveGroupPathParams;
    headers: RemoveGroupHeaders;
}
export declare class RemoveGroupResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
