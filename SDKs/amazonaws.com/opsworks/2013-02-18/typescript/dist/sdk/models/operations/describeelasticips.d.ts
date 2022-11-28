import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeElasticIpsXAmzTargetEnum {
    OpsWorks20130218DescribeElasticIps = "OpsWorks_20130218.DescribeElasticIps"
}
export declare class DescribeElasticIpsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeElasticIpsXAmzTargetEnum;
}
export declare class DescribeElasticIpsRequest extends SpeakeasyBase {
    headers: DescribeElasticIpsHeaders;
    request: shared.DescribeElasticIpsRequest;
}
export declare class DescribeElasticIpsResponse extends SpeakeasyBase {
    contentType: string;
    describeElasticIpsResult?: shared.DescribeElasticIpsResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
