import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateProjectRequestBody extends SpeakeasyBase {
    clientToken?: string;
    portalId: string;
    projectDescription?: string;
    projectName: string;
    tags?: Map<string, string>;
}
export declare class CreateProjectRequest extends SpeakeasyBase {
    headers: CreateProjectHeaders;
    request: CreateProjectRequestBody;
}
export declare class CreateProjectResponse extends SpeakeasyBase {
    contentType: string;
    createProjectResponse?: shared.CreateProjectResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
