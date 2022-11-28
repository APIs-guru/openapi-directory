import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateProjectXAmzTargetEnum {
    SageMakerCreateProject = "SageMaker.CreateProject"
}
export declare class CreateProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateProjectXAmzTargetEnum;
}
export declare class CreateProjectRequest extends SpeakeasyBase {
    headers: CreateProjectHeaders;
    request: shared.CreateProjectInput;
}
export declare class CreateProjectResponse extends SpeakeasyBase {
    contentType: string;
    createProjectOutput?: shared.CreateProjectOutput;
    resourceLimitExceeded?: any;
    statusCode: number;
}
