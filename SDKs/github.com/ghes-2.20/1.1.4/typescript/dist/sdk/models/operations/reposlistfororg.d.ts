import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListForOrgPathParams extends SpeakeasyBase {
    org: string;
}
export declare enum ReposListForOrgDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum ReposListForOrgSortEnum {
    Created = "created",
    Updated = "updated",
    Pushed = "pushed",
    FullName = "full_name"
}
export declare enum ReposListForOrgTypeEnum {
    All = "all",
    Public = "public",
    Private = "private",
    Forks = "forks",
    Sources = "sources",
    Member = "member",
    Internal = "internal"
}
export declare class ReposListForOrgQueryParams extends SpeakeasyBase {
    direction?: ReposListForOrgDirectionEnum;
    page?: number;
    perPage?: number;
    sort?: ReposListForOrgSortEnum;
    type?: ReposListForOrgTypeEnum;
}
export declare class ReposListForOrgRequest extends SpeakeasyBase {
    pathParams: ReposListForOrgPathParams;
    queryParams: ReposListForOrgQueryParams;
}
export declare class ReposListForOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    minimalRepositories?: shared.MinimalRepository[];
}
