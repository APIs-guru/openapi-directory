import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GroupsGetStatusEnum {
    Deleted = "deleted",
    Active = "active"
}
export declare class GroupsGetQueryParams extends SpeakeasyBase {
    createdAfter?: string;
    createdBefore?: string;
    limit?: number;
    offset?: number;
    status?: GroupsGetStatusEnum;
    tags?: string;
    textSearch?: string;
    write?: boolean;
}
export declare class GroupsGetRequest extends SpeakeasyBase {
    queryParams: GroupsGetQueryParams;
}
export declare class GroupsGetResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;
    contentType: string;
    statusCode: number;
}
