import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostGroupsRequestBody extends SpeakeasyBase {
    adminIds?: string;
    name?: string;
    notes?: string;
    userIds?: string;
}
export declare class PostGroupsRequest extends SpeakeasyBase {
    request?: PostGroupsRequestBody;
}
export declare class PostGroupsResponse extends SpeakeasyBase {
    contentType: string;
    groupEntity?: shared.GroupEntity;
    statusCode: number;
}
