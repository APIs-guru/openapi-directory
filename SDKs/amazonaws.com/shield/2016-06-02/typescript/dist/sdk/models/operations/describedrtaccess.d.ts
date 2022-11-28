import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDrtAccessXAmzTargetEnum {
    AwsShield20160616DescribeDrtAccess = "AWSShield_20160616.DescribeDRTAccess"
}
export declare class DescribeDrtAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDrtAccessXAmzTargetEnum;
}
export declare class DescribeDrtAccessRequest extends SpeakeasyBase {
    headers: DescribeDrtAccessHeaders;
    request: Map<string, any>;
}
export declare class DescribeDrtAccessResponse extends SpeakeasyBase {
    contentType: string;
    describeDrtAccessResponse?: shared.DescribeDrtAccessResponse;
    internalErrorException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
