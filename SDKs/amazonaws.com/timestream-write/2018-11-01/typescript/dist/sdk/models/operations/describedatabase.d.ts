import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDatabaseXAmzTargetEnum {
    Timestream20181101DescribeDatabase = "Timestream_20181101.DescribeDatabase"
}
export declare class DescribeDatabaseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDatabaseXAmzTargetEnum;
}
export declare class DescribeDatabaseRequest extends SpeakeasyBase {
    headers: DescribeDatabaseHeaders;
    request: shared.DescribeDatabaseRequest;
}
export declare class DescribeDatabaseResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeDatabaseResponse?: shared.DescribeDatabaseResponse;
    internalServerException?: any;
    invalidEndpointException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
