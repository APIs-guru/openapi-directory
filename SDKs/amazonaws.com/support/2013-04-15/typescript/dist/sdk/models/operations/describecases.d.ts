import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeCasesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeCasesXAmzTargetEnum {
    AwsSupport20130415DescribeCases = "AWSSupport_20130415.DescribeCases"
}
export declare class DescribeCasesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCasesXAmzTargetEnum;
}
export declare class DescribeCasesRequest extends SpeakeasyBase {
    queryParams: DescribeCasesQueryParams;
    headers: DescribeCasesHeaders;
    request: shared.DescribeCasesRequest;
}
export declare class DescribeCasesResponse extends SpeakeasyBase {
    caseIdNotFound?: any;
    contentType: string;
    describeCasesResponse?: shared.DescribeCasesResponse;
    internalServerError?: any;
    statusCode: number;
}
