import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeOperatingSystemsXAmzTargetEnum {
    OpsWorks20130218DescribeOperatingSystems = "OpsWorks_20130218.DescribeOperatingSystems"
}
export declare class DescribeOperatingSystemsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeOperatingSystemsXAmzTargetEnum;
}
export declare class DescribeOperatingSystemsRequest extends SpeakeasyBase {
    headers: DescribeOperatingSystemsHeaders;
}
export declare class DescribeOperatingSystemsResponse extends SpeakeasyBase {
    contentType: string;
    describeOperatingSystemsResponse?: shared.DescribeOperatingSystemsResponse;
    statusCode: number;
}
