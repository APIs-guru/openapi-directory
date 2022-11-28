import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListResourceComplianceSummariesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListResourceComplianceSummariesXAmzTargetEnum {
    AmazonSsmListResourceComplianceSummaries = "AmazonSSM.ListResourceComplianceSummaries"
}
export declare class ListResourceComplianceSummariesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResourceComplianceSummariesXAmzTargetEnum;
}
export declare class ListResourceComplianceSummariesRequest extends SpeakeasyBase {
    queryParams: ListResourceComplianceSummariesQueryParams;
    headers: ListResourceComplianceSummariesHeaders;
    request: shared.ListResourceComplianceSummariesRequest;
}
export declare class ListResourceComplianceSummariesResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidFilter?: any;
    invalidNextToken?: any;
    listResourceComplianceSummariesResult?: shared.ListResourceComplianceSummariesResult;
    statusCode: number;
}
