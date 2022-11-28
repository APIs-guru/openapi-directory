import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDeliverabilityDashboardOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeliverabilityDashboardOptionsRequest extends SpeakeasyBase {
    headers: GetDeliverabilityDashboardOptionsHeaders;
}
export declare class GetDeliverabilityDashboardOptionsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getDeliverabilityDashboardOptionsResponse?: shared.GetDeliverabilityDashboardOptionsResponse;
    limitExceededException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
