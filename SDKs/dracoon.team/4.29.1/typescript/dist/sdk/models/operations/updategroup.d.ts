import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGroupPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class UpdateGroupHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class UpdateGroupRequest extends SpeakeasyBase {
    pathParams: UpdateGroupPathParams;
    headers: UpdateGroupHeaders;
    request: shared.UpdateGroupRequest;
}
export declare class UpdateGroupResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    group?: shared.Group;
    statusCode: number;
}
