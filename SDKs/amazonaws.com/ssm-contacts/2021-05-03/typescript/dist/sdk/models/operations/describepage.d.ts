import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribePageXAmzTargetEnum {
    SsmContactsDescribePage = "SSMContacts.DescribePage"
}
export declare class DescribePageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePageXAmzTargetEnum;
}
export declare class DescribePageRequest extends SpeakeasyBase {
    headers: DescribePageHeaders;
    request: shared.DescribePageRequest;
}
export declare class DescribePageResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    dataEncryptionException?: any;
    describePageResult?: shared.DescribePageResult;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
