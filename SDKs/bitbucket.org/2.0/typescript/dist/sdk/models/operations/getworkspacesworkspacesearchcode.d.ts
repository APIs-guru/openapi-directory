import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkspacesWorkspaceSearchCodePathParams extends SpeakeasyBase {
    workspace: string;
}
export declare class GetWorkspacesWorkspaceSearchCodeQueryParams extends SpeakeasyBase {
    page?: number;
    pagelen?: number;
    searchQuery: string;
}
export declare class GetWorkspacesWorkspaceSearchCodeRequest extends SpeakeasyBase {
    pathParams: GetWorkspacesWorkspaceSearchCodePathParams;
    queryParams: GetWorkspacesWorkspaceSearchCodeQueryParams;
}
export declare class GetWorkspacesWorkspaceSearchCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    searchResultPage?: shared.SearchResultPage;
}
