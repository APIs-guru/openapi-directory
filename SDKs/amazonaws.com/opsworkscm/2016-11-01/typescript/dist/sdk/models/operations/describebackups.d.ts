import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeBackupsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeBackupsXAmzTargetEnum {
    OpsWorksCmV20161101DescribeBackups = "OpsWorksCM_V2016_11_01.DescribeBackups"
}
export declare class DescribeBackupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeBackupsXAmzTargetEnum;
}
export declare class DescribeBackupsRequest extends SpeakeasyBase {
    queryParams: DescribeBackupsQueryParams;
    headers: DescribeBackupsHeaders;
    request: shared.DescribeBackupsRequest;
}
export declare class DescribeBackupsResponse extends SpeakeasyBase {
    contentType: string;
    describeBackupsResponse?: shared.DescribeBackupsResponse;
    invalidNextTokenException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
