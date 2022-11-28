import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposCreateDeploymentStatusPathParams extends SpeakeasyBase {
    deploymentId: number;
    owner: string;
    repo: string;
}
export declare enum ReposCreateDeploymentStatusRequestBodyEnvironmentEnum {
    Production = "production",
    Staging = "staging",
    Qa = "qa"
}
export declare enum ReposCreateDeploymentStatusRequestBodyStateEnum {
    Error = "error",
    Failure = "failure",
    Inactive = "inactive",
    InProgress = "in_progress",
    Queued = "queued",
    Pending = "pending",
    Success = "success"
}
export declare class ReposCreateDeploymentStatusRequestBody extends SpeakeasyBase {
    autoInactive?: boolean;
    description?: string;
    environment?: ReposCreateDeploymentStatusRequestBodyEnvironmentEnum;
    environmentUrl?: string;
    logUrl?: string;
    state: ReposCreateDeploymentStatusRequestBodyStateEnum;
    targetUrl?: string;
}
export declare class ReposCreateDeploymentStatusRequest extends SpeakeasyBase {
    pathParams: ReposCreateDeploymentStatusPathParams;
    request?: ReposCreateDeploymentStatusRequestBody;
}
export declare class ReposCreateDeploymentStatusResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    deploymentStatus?: shared.DeploymentStatus;
    validationError?: shared.ValidationError;
}
