import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribePatchGroupsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribePatchGroupsXAmzTargetEnum {
    AmazonSsmDescribePatchGroups = "AmazonSSM.DescribePatchGroups"
}
export declare class DescribePatchGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePatchGroupsXAmzTargetEnum;
}
export declare class DescribePatchGroupsRequest extends SpeakeasyBase {
    queryParams: DescribePatchGroupsQueryParams;
    headers: DescribePatchGroupsHeaders;
    request: shared.DescribePatchGroupsRequest;
}
export declare class DescribePatchGroupsResponse extends SpeakeasyBase {
    contentType: string;
    describePatchGroupsResult?: shared.DescribePatchGroupsResult;
    internalServerError?: any;
    statusCode: number;
}
