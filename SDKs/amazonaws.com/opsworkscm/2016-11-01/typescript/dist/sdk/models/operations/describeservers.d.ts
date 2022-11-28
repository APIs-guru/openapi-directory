import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeServersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeServersXAmzTargetEnum {
    OpsWorksCmV20161101DescribeServers = "OpsWorksCM_V2016_11_01.DescribeServers"
}
export declare class DescribeServersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeServersXAmzTargetEnum;
}
export declare class DescribeServersRequest extends SpeakeasyBase {
    queryParams: DescribeServersQueryParams;
    headers: DescribeServersHeaders;
    request: shared.DescribeServersRequest;
}
export declare class DescribeServersResponse extends SpeakeasyBase {
    contentType: string;
    describeServersResponse?: shared.DescribeServersResponse;
    invalidNextTokenException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
