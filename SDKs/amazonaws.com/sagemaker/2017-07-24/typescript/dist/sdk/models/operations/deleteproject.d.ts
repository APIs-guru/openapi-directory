import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteProjectXAmzTargetEnum {
    SageMakerDeleteProject = "SageMaker.DeleteProject"
}
export declare class DeleteProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteProjectXAmzTargetEnum;
}
export declare class DeleteProjectRequest extends SpeakeasyBase {
    headers: DeleteProjectHeaders;
    request: shared.DeleteProjectInput;
}
export declare class DeleteProjectResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    statusCode: number;
}
