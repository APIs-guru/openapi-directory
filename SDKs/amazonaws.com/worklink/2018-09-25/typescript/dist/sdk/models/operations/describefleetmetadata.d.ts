import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeFleetMetadataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeFleetMetadataRequestBody extends SpeakeasyBase {
    fleetArn: string;
}
export declare class DescribeFleetMetadataRequest extends SpeakeasyBase {
    headers: DescribeFleetMetadataHeaders;
    request: DescribeFleetMetadataRequestBody;
}
export declare class DescribeFleetMetadataResponse extends SpeakeasyBase {
    contentType: string;
    describeFleetMetadataResponse?: shared.DescribeFleetMetadataResponse;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
