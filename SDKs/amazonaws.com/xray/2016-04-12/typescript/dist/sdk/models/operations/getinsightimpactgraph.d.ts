import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInsightImpactGraphHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetInsightImpactGraphRequestBody extends SpeakeasyBase {
    endTime: Date;
    insightId: string;
    nextToken?: string;
    startTime: Date;
}
export declare class GetInsightImpactGraphRequest extends SpeakeasyBase {
    headers: GetInsightImpactGraphHeaders;
    request: GetInsightImpactGraphRequestBody;
}
export declare class GetInsightImpactGraphResponse extends SpeakeasyBase {
    contentType: string;
    getInsightImpactGraphResult?: shared.GetInsightImpactGraphResult;
    invalidRequestException?: any;
    statusCode: number;
    throttledException?: any;
}
