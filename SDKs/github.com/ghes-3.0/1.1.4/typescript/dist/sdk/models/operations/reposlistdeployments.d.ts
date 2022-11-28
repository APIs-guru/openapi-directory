import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListDeploymentsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposListDeploymentsQueryParams extends SpeakeasyBase {
    environment?: string;
    page?: number;
    perPage?: number;
    ref?: string;
    sha?: string;
    task?: string;
}
export declare class ReposListDeploymentsRequest extends SpeakeasyBase {
    pathParams: ReposListDeploymentsPathParams;
    queryParams: ReposListDeploymentsQueryParams;
}
export declare class ReposListDeploymentsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    deployments?: shared.Deployment[];
}
