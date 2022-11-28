import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposCreateDeploymentPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposCreateDeploymentRequestBody extends SpeakeasyBase {
    autoMerge?: boolean;
    createdAt?: string;
    description?: string;
    environment?: string;
    payload?: any;
    productionEnvironment?: boolean;
    ref: string;
    requiredContexts?: string[];
    task?: string;
    transientEnvironment?: boolean;
}
export declare class ReposCreateDeployment202ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class ReposCreateDeployment409ApplicationJson extends SpeakeasyBase {
    documentationUrl?: string;
    message?: string;
}
export declare class ReposCreateDeploymentRequest extends SpeakeasyBase {
    pathParams: ReposCreateDeploymentPathParams;
    request?: ReposCreateDeploymentRequestBody;
}
export declare class ReposCreateDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deployment?: shared.Deployment;
    reposCreateDeployment202ApplicationJsonObject?: ReposCreateDeployment202ApplicationJson;
    reposCreateDeployment409ApplicationJsonObject?: ReposCreateDeployment409ApplicationJson;
    validationError?: shared.ValidationError;
}
