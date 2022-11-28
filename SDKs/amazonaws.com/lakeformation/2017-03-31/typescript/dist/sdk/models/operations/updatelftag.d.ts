import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateLfTagXAmzTargetEnum {
    AwsLakeFormationUpdateLfTag = "AWSLakeFormation.UpdateLFTag"
}
export declare class UpdateLfTagHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLfTagXAmzTargetEnum;
}
export declare class UpdateLfTagRequest extends SpeakeasyBase {
    headers: UpdateLfTagHeaders;
    request: shared.UpdateLfTagRequest;
}
export declare class UpdateLfTagResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    concurrentModificationException?: any;
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
    updateLfTagResponse?: Map<string, any>;
}
