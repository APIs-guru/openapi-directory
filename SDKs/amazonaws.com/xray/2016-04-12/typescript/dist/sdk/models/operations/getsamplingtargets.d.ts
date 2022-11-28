import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSamplingTargetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSamplingTargetsRequestBody extends SpeakeasyBase {
    samplingStatisticsDocuments: shared.SamplingStatisticsDocument[];
}
export declare class GetSamplingTargetsRequest extends SpeakeasyBase {
    headers: GetSamplingTargetsHeaders;
    request: GetSamplingTargetsRequestBody;
}
export declare class GetSamplingTargetsResponse extends SpeakeasyBase {
    contentType: string;
    getSamplingTargetsResult?: shared.GetSamplingTargetsResult;
    invalidRequestException?: any;
    statusCode: number;
    throttledException?: any;
}
