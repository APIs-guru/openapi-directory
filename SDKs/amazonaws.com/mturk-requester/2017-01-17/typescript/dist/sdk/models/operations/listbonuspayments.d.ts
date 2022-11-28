import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListBonusPaymentsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListBonusPaymentsXAmzTargetEnum {
    MTurkRequesterServiceV20170117ListBonusPayments = "MTurkRequesterServiceV20170117.ListBonusPayments"
}
export declare class ListBonusPaymentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListBonusPaymentsXAmzTargetEnum;
}
export declare class ListBonusPaymentsRequest extends SpeakeasyBase {
    queryParams: ListBonusPaymentsQueryParams;
    headers: ListBonusPaymentsHeaders;
    request: shared.ListBonusPaymentsRequest;
}
export declare class ListBonusPaymentsResponse extends SpeakeasyBase {
    contentType: string;
    listBonusPaymentsResponse?: shared.ListBonusPaymentsResponse;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
