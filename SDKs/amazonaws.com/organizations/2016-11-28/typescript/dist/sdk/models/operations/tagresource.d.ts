import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TagResourceXAmzTargetEnum {
    AwsOrganizationsV20161128TagResource = "AWSOrganizationsV20161128.TagResource"
}
export declare class TagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TagResourceXAmzTargetEnum;
}
export declare class TagResourceRequest extends SpeakeasyBase {
    headers: TagResourceHeaders;
    request: shared.TagResourceRequest;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    concurrentModificationException?: any;
    constraintViolationException?: any;
    contentType: string;
    invalidInputException?: any;
    serviceException?: any;
    statusCode: number;
    targetNotFoundException?: any;
    tooManyRequestsException?: any;
}
