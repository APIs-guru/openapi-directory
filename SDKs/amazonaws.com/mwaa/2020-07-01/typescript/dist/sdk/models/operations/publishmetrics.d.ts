import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PublishMetricsPathParams extends SpeakeasyBase {
    environmentName: string;
}
export declare class PublishMetricsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PublishMetricsRequestBody extends SpeakeasyBase {
    metricData: shared.MetricDatum[];
}
export declare class PublishMetricsRequest extends SpeakeasyBase {
    pathParams: PublishMetricsPathParams;
    headers: PublishMetricsHeaders;
    request: PublishMetricsRequestBody;
}
export declare class PublishMetricsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    publishMetricsOutput?: Map<string, any>;
    statusCode: number;
    validationException?: any;
}
