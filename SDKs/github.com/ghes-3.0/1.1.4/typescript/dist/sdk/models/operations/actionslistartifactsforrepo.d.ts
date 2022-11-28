import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsListArtifactsForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActionsListArtifactsForRepoQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActionsListArtifactsForRepo200ApplicationJson extends SpeakeasyBase {
    artifacts: shared.Artifact[];
    totalCount: number;
}
export declare class ActionsListArtifactsForRepoRequest extends SpeakeasyBase {
    pathParams: ActionsListArtifactsForRepoPathParams;
    queryParams: ActionsListArtifactsForRepoQueryParams;
}
export declare class ActionsListArtifactsForRepoResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    actionsListArtifactsForRepo200ApplicationJsonObject?: ActionsListArtifactsForRepo200ApplicationJson;
}
