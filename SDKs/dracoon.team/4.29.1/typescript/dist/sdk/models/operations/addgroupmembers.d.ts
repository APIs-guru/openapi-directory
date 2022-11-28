import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddGroupMembersPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class AddGroupMembersHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class AddGroupMembersRequest extends SpeakeasyBase {
    pathParams: AddGroupMembersPathParams;
    headers: AddGroupMembersHeaders;
    request: shared.ChangeGroupMembersRequest;
}
export declare class AddGroupMembersResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    group?: shared.Group;
    statusCode: number;
}
