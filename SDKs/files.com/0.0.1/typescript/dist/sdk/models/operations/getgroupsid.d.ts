import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetGroupsIdRequest extends SpeakeasyBase {
    pathParams: GetGroupsIdPathParams;
}
export declare class GetGroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    groupEntity?: shared.GroupEntity;
    statusCode: number;
}
