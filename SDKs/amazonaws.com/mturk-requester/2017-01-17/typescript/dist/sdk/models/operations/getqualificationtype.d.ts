import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetQualificationTypeXAmzTargetEnum {
    MTurkRequesterServiceV20170117GetQualificationType = "MTurkRequesterServiceV20170117.GetQualificationType"
}
export declare class GetQualificationTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetQualificationTypeXAmzTargetEnum;
}
export declare class GetQualificationTypeRequest extends SpeakeasyBase {
    headers: GetQualificationTypeHeaders;
    request: shared.GetQualificationTypeRequest;
}
export declare class GetQualificationTypeResponse extends SpeakeasyBase {
    contentType: string;
    getQualificationTypeResponse?: shared.GetQualificationTypeResponse;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
