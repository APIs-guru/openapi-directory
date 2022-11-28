import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The command given to the device to execute.
**/
export declare class CreateTaskRequestBodyCommand extends SpeakeasyBase {
    reboot?: Map<string, any>;
    unlock?: Map<string, any>;
}
export declare class CreateTaskRequestBody extends SpeakeasyBase {
    clientToken?: string;
    command: CreateTaskRequestBodyCommand;
    description?: string;
    tags?: Map<string, string>;
    targets: string[];
}
export declare class CreateTaskRequest extends SpeakeasyBase {
    headers: CreateTaskHeaders;
    request: CreateTaskRequestBody;
}
export declare class CreateTaskResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createTaskOutput?: shared.CreateTaskOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
