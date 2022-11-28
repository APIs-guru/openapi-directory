import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ViewBillingXAmzTargetEnum {
    Route53DomainsV20140515ViewBilling = "Route53Domains_v20140515.ViewBilling"
}
export declare class ViewBillingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ViewBillingXAmzTargetEnum;
}
export declare class ViewBillingRequest extends SpeakeasyBase {
    headers: ViewBillingHeaders;
    request: shared.ViewBillingRequest;
}
export declare class ViewBillingResponse extends SpeakeasyBase {
    contentType: string;
    invalidInput?: any;
    statusCode: number;
    viewBillingResponse?: shared.ViewBillingResponse;
}
