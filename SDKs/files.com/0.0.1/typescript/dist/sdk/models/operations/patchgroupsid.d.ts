import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchGroupsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PatchGroupsIdRequestBody extends SpeakeasyBase {
    adminIds?: string;
    name?: string;
    notes?: string;
    userIds?: string;
}
export declare class PatchGroupsIdRequest extends SpeakeasyBase {
    pathParams: PatchGroupsIdPathParams;
    request?: PatchGroupsIdRequestBody;
}
export declare class PatchGroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    groupEntity?: shared.GroupEntity;
    statusCode: number;
}
