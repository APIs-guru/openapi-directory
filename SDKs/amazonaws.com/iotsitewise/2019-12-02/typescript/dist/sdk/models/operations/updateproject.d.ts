import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateProjectPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class UpdateProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateProjectRequestBody extends SpeakeasyBase {
    clientToken?: string;
    projectDescription?: string;
    projectName: string;
}
export declare class UpdateProjectRequest extends SpeakeasyBase {
    pathParams: UpdateProjectPathParams;
    headers: UpdateProjectHeaders;
    request: UpdateProjectRequestBody;
}
export declare class UpdateProjectResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateProjectResponse?: Map<string, any>;
}
