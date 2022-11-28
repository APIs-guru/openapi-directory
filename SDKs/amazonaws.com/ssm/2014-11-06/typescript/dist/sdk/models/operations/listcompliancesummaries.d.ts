import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListComplianceSummariesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListComplianceSummariesXAmzTargetEnum {
    AmazonSsmListComplianceSummaries = "AmazonSSM.ListComplianceSummaries"
}
export declare class ListComplianceSummariesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListComplianceSummariesXAmzTargetEnum;
}
export declare class ListComplianceSummariesRequest extends SpeakeasyBase {
    queryParams: ListComplianceSummariesQueryParams;
    headers: ListComplianceSummariesHeaders;
    request: shared.ListComplianceSummariesRequest;
}
export declare class ListComplianceSummariesResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidFilter?: any;
    invalidNextToken?: any;
    listComplianceSummariesResult?: shared.ListComplianceSummariesResult;
    statusCode: number;
}
