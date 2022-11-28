import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeCommunicationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeCommunicationsXAmzTargetEnum {
    AwsSupport20130415DescribeCommunications = "AWSSupport_20130415.DescribeCommunications"
}
export declare class DescribeCommunicationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCommunicationsXAmzTargetEnum;
}
export declare class DescribeCommunicationsRequest extends SpeakeasyBase {
    queryParams: DescribeCommunicationsQueryParams;
    headers: DescribeCommunicationsHeaders;
    request: shared.DescribeCommunicationsRequest;
}
export declare class DescribeCommunicationsResponse extends SpeakeasyBase {
    caseIdNotFound?: any;
    contentType: string;
    describeCommunicationsResponse?: shared.DescribeCommunicationsResponse;
    internalServerError?: any;
    statusCode: number;
}
