import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateActionTargetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateActionTargetRequestBody extends SpeakeasyBase {
    description: string;
    id: string;
    name: string;
}
export declare class CreateActionTargetRequest extends SpeakeasyBase {
    headers: CreateActionTargetHeaders;
    request: CreateActionTargetRequestBody;
}
export declare class CreateActionTargetResponse extends SpeakeasyBase {
    contentType: string;
    createActionTargetResponse?: shared.CreateActionTargetResponse;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceConflictException?: any;
    statusCode: number;
}
