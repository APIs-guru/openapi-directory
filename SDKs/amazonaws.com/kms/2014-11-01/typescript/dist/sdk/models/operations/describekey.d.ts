import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeKeyXAmzTargetEnum {
    TrentServiceDescribeKey = "TrentService.DescribeKey"
}
export declare class DescribeKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeKeyXAmzTargetEnum;
}
export declare class DescribeKeyRequest extends SpeakeasyBase {
    headers: DescribeKeyHeaders;
    request: shared.DescribeKeyRequest;
}
export declare class DescribeKeyResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    describeKeyResponse?: shared.DescribeKeyResponse;
    invalidArnException?: any;
    kmsInternalException?: any;
    notFoundException?: any;
    statusCode: number;
}
