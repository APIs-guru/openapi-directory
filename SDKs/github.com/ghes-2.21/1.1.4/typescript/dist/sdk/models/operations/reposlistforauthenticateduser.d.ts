import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ReposListForAuthenticatedUserDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum ReposListForAuthenticatedUserSortEnum {
    Created = "created",
    Updated = "updated",
    Pushed = "pushed",
    FullName = "full_name"
}
export declare enum ReposListForAuthenticatedUserTypeEnum {
    All = "all",
    Owner = "owner",
    Public = "public",
    Private = "private",
    Member = "member"
}
export declare enum ReposListForAuthenticatedUserVisibilityEnum {
    All = "all",
    Public = "public",
    Private = "private"
}
export declare class ReposListForAuthenticatedUserQueryParams extends SpeakeasyBase {
    affiliation?: string;
    before?: Date;
    direction?: ReposListForAuthenticatedUserDirectionEnum;
    page?: number;
    perPage?: number;
    since?: Date;
    sort?: ReposListForAuthenticatedUserSortEnum;
    type?: ReposListForAuthenticatedUserTypeEnum;
    visibility?: ReposListForAuthenticatedUserVisibilityEnum;
}
export declare class ReposListForAuthenticatedUserRequest extends SpeakeasyBase {
    queryParams: ReposListForAuthenticatedUserQueryParams;
}
export declare class ReposListForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    repositories?: shared.Repository[];
    validationError?: shared.ValidationError;
}
