import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TypeaheadForWorkspacePathParams extends SpeakeasyBase {
    workspaceGid: string;
}
export declare enum TypeaheadForWorkspaceResourceTypeEnum {
    CustomField = "custom_field",
    Portfolio = "portfolio",
    Project = "project",
    Tag = "tag",
    Task = "task",
    User = "user"
}
export declare enum TypeaheadForWorkspaceTypeEnum {
    CustomField = "custom_field",
    Portfolio = "portfolio",
    Project = "project",
    Tag = "tag",
    Task = "task",
    User = "user"
}
export declare class TypeaheadForWorkspaceQueryParams extends SpeakeasyBase {
    count?: number;
    optFields?: string[];
    optPretty?: boolean;
    query?: string;
    resourceType: TypeaheadForWorkspaceResourceTypeEnum;
    type?: TypeaheadForWorkspaceTypeEnum;
}
/**
 * A generic list of objects, such as those returned by the typeahead search endpoint.
**/
export declare class TypeaheadForWorkspace200ApplicationJson extends SpeakeasyBase {
    data?: shared.AsanaNamedResource[];
}
export declare class TypeaheadForWorkspaceRequest extends SpeakeasyBase {
    pathParams: TypeaheadForWorkspacePathParams;
    queryParams: TypeaheadForWorkspaceQueryParams;
}
export declare class TypeaheadForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    typeaheadForWorkspace200ApplicationJsonObject?: TypeaheadForWorkspace200ApplicationJson;
}
