import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutDeliverabilityDashboardOptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutDeliverabilityDashboardOptionRequestBody extends SpeakeasyBase {
    dashboardEnabled: boolean;
    subscribedDomains?: shared.DomainDeliverabilityTrackingOption[];
}
export declare class PutDeliverabilityDashboardOptionRequest extends SpeakeasyBase {
    headers: PutDeliverabilityDashboardOptionHeaders;
    request: PutDeliverabilityDashboardOptionRequestBody;
}
export declare class PutDeliverabilityDashboardOptionResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    badRequestException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    putDeliverabilityDashboardOptionResponse?: Map<string, any>;
    statusCode: number;
    tooManyRequestsException?: any;
}
