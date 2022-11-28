import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeEngagementXAmzTargetEnum {
    SsmContactsDescribeEngagement = "SSMContacts.DescribeEngagement"
}
export declare class DescribeEngagementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEngagementXAmzTargetEnum;
}
export declare class DescribeEngagementRequest extends SpeakeasyBase {
    headers: DescribeEngagementHeaders;
    request: shared.DescribeEngagementRequest;
}
export declare class DescribeEngagementResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    dataEncryptionException?: any;
    describeEngagementResult?: shared.DescribeEngagementResult;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
