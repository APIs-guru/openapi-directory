import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveGroupMembersPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class RemoveGroupMembersHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RemoveGroupMembersRequest extends SpeakeasyBase {
    pathParams: RemoveGroupMembersPathParams;
    headers: RemoveGroupMembersHeaders;
    request: shared.ChangeGroupMembersRequest;
}
export declare class RemoveGroupMembersResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    group?: shared.Group;
    statusCode: number;
}
