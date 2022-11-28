import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListDeploymentStatusesPathParams extends SpeakeasyBase {
    deploymentId: number;
    owner: string;
    repo: string;
}
export declare class ReposListDeploymentStatusesQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ReposListDeploymentStatusesRequest extends SpeakeasyBase {
    pathParams: ReposListDeploymentStatusesPathParams;
    queryParams: ReposListDeploymentStatusesQueryParams;
}
export declare class ReposListDeploymentStatusesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    deploymentStatuses?: shared.DeploymentStatus[];
}
