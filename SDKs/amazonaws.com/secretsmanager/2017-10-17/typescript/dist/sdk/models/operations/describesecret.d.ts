import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeSecretXAmzTargetEnum {
    SecretsmanagerDescribeSecret = "secretsmanager.DescribeSecret"
}
export declare class DescribeSecretHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSecretXAmzTargetEnum;
}
export declare class DescribeSecretRequest extends SpeakeasyBase {
    headers: DescribeSecretHeaders;
    request: shared.DescribeSecretRequest;
}
export declare class DescribeSecretResponse extends SpeakeasyBase {
    contentType: string;
    describeSecretResponse?: shared.DescribeSecretResponse;
    internalServiceError?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
