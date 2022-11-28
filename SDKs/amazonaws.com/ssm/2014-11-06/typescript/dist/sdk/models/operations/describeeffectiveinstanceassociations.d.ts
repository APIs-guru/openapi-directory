import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeEffectiveInstanceAssociationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeEffectiveInstanceAssociationsXAmzTargetEnum {
    AmazonSsmDescribeEffectiveInstanceAssociations = "AmazonSSM.DescribeEffectiveInstanceAssociations"
}
export declare class DescribeEffectiveInstanceAssociationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEffectiveInstanceAssociationsXAmzTargetEnum;
}
export declare class DescribeEffectiveInstanceAssociationsRequest extends SpeakeasyBase {
    queryParams: DescribeEffectiveInstanceAssociationsQueryParams;
    headers: DescribeEffectiveInstanceAssociationsHeaders;
    request: shared.DescribeEffectiveInstanceAssociationsRequest;
}
export declare class DescribeEffectiveInstanceAssociationsResponse extends SpeakeasyBase {
    contentType: string;
    describeEffectiveInstanceAssociationsResult?: shared.DescribeEffectiveInstanceAssociationsResult;
    internalServerError?: any;
    invalidInstanceId?: any;
    invalidNextToken?: any;
    statusCode: number;
}
