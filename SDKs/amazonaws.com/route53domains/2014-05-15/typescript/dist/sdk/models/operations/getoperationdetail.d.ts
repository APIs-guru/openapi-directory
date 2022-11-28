import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetOperationDetailXAmzTargetEnum {
    Route53DomainsV20140515GetOperationDetail = "Route53Domains_v20140515.GetOperationDetail"
}
export declare class GetOperationDetailHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetOperationDetailXAmzTargetEnum;
}
export declare class GetOperationDetailRequest extends SpeakeasyBase {
    headers: GetOperationDetailHeaders;
    request: shared.GetOperationDetailRequest;
}
export declare class GetOperationDetailResponse extends SpeakeasyBase {
    contentType: string;
    getOperationDetailResponse?: shared.GetOperationDetailResponse;
    invalidInput?: any;
    statusCode: number;
}
