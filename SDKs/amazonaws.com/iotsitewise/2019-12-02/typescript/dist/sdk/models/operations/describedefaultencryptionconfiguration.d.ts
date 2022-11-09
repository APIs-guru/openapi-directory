import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeDefaultEncryptionConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeDefaultEncryptionConfigurationRequest extends SpeakeasyBase {
    headers: DescribeDefaultEncryptionConfigurationHeaders;
}
export declare class DescribeDefaultEncryptionConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    describeDefaultEncryptionConfigurationResponse?: shared.DescribeDefaultEncryptionConfigurationResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    statusCode: number;
    throttlingException?: any;
}
