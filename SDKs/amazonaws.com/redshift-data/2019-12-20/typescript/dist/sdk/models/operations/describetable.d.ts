import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeTableQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeTableXAmzTargetEnum {
    RedshiftDataDescribeTable = "RedshiftData.DescribeTable"
}
export declare class DescribeTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTableXAmzTargetEnum;
}
export declare class DescribeTableRequest extends SpeakeasyBase {
    queryParams: DescribeTableQueryParams;
    headers: DescribeTableHeaders;
    request: shared.DescribeTableRequest;
}
export declare class DescribeTableResponse extends SpeakeasyBase {
    contentType: string;
    describeTableResponse?: shared.DescribeTableResponse;
    internalServerException?: any;
    statusCode: number;
    validationException?: any;
}
