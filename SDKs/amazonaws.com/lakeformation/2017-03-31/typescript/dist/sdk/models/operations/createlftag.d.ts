import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateLfTagXAmzTargetEnum {
    AwsLakeFormationCreateLfTag = "AWSLakeFormation.CreateLFTag"
}
export declare class CreateLfTagHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLfTagXAmzTargetEnum;
}
export declare class CreateLfTagRequest extends SpeakeasyBase {
    headers: CreateLfTagHeaders;
    request: shared.CreateLfTagRequest;
}
export declare class CreateLfTagResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createLfTagResponse?: Map<string, any>;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    resourceNumberLimitExceededException?: any;
    statusCode: number;
}
