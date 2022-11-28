import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetLfTagXAmzTargetEnum {
    AwsLakeFormationGetLfTag = "AWSLakeFormation.GetLFTag"
}
export declare class GetLfTagHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLfTagXAmzTargetEnum;
}
export declare class GetLfTagRequest extends SpeakeasyBase {
    headers: GetLfTagHeaders;
    request: shared.GetLfTagRequest;
}
export declare class GetLfTagResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    entityNotFoundException?: any;
    getLfTagResponse?: shared.GetLfTagResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
