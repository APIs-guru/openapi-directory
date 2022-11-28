import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListForUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare enum ReposListForUserDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum ReposListForUserSortEnum {
    Created = "created",
    Updated = "updated",
    Pushed = "pushed",
    FullName = "full_name"
}
export declare enum ReposListForUserTypeEnum {
    All = "all",
    Owner = "owner",
    Member = "member"
}
export declare class ReposListForUserQueryParams extends SpeakeasyBase {
    direction?: ReposListForUserDirectionEnum;
    page?: number;
    perPage?: number;
    sort?: ReposListForUserSortEnum;
    type?: ReposListForUserTypeEnum;
}
export declare class ReposListForUserRequest extends SpeakeasyBase {
    pathParams: ReposListForUserPathParams;
    queryParams: ReposListForUserQueryParams;
}
export declare class ReposListForUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    minimalRepositories?: shared.MinimalRepository[];
}
