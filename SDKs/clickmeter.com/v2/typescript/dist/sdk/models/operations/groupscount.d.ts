import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GroupsCountStatusEnum {
    Deleted = "deleted",
    Active = "active"
}
export declare class GroupsCountQueryParams extends SpeakeasyBase {
    createdAfter?: string;
    createdBefore?: string;
    status?: GroupsCountStatusEnum;
    tags?: string;
    textSearch?: string;
    write?: boolean;
}
export declare class GroupsCountRequest extends SpeakeasyBase {
    queryParams: GroupsCountQueryParams;
}
export declare class GroupsCountResponse extends SpeakeasyBase {
    apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
