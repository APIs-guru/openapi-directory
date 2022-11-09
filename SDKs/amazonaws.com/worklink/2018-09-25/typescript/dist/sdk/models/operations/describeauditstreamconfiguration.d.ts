import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeAuditStreamConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAuditStreamConfigurationRequestBody extends SpeakeasyBase {
    fleetArn: string;
}
export declare class DescribeAuditStreamConfigurationRequest extends SpeakeasyBase {
    headers: DescribeAuditStreamConfigurationHeaders;
    request: DescribeAuditStreamConfigurationRequestBody;
}
export declare class DescribeAuditStreamConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    describeAuditStreamConfigurationResponse?: shared.DescribeAuditStreamConfigurationResponse;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
