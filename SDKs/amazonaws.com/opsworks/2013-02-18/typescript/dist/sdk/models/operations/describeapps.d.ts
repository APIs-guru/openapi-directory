import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAppsXAmzTargetEnum {
    OpsWorks20130218DescribeApps = "OpsWorks_20130218.DescribeApps"
}
export declare class DescribeAppsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAppsXAmzTargetEnum;
}
export declare class DescribeAppsRequest extends SpeakeasyBase {
    headers: DescribeAppsHeaders;
    request: shared.DescribeAppsRequest;
}
export declare class DescribeAppsResponse extends SpeakeasyBase {
    contentType: string;
    describeAppsResult?: shared.DescribeAppsResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
