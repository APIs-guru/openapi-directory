import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDeploymentsForRepositoryPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetDeploymentsForRepositoryRequest extends SpeakeasyBase {
    pathParams: GetDeploymentsForRepositoryPathParams;
}
export declare class GetDeploymentsForRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    paginatedDeployments?: shared.PaginatedDeployments;
}
