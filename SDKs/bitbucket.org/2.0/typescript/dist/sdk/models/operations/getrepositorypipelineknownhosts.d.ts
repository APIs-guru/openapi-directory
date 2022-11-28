import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoryPipelineKnownHostsPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoryPipelineKnownHostsRequest extends SpeakeasyBase {
    pathParams: GetRepositoryPipelineKnownHostsPathParams;
}
export declare class GetRepositoryPipelineKnownHostsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    paginatedPipelineKnownHosts?: shared.PaginatedPipelineKnownHosts;
}
