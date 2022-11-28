import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateQualificationTypeXAmzTargetEnum {
    MTurkRequesterServiceV20170117UpdateQualificationType = "MTurkRequesterServiceV20170117.UpdateQualificationType"
}
export declare class UpdateQualificationTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateQualificationTypeXAmzTargetEnum;
}
export declare class UpdateQualificationTypeRequest extends SpeakeasyBase {
    headers: UpdateQualificationTypeHeaders;
    request: shared.UpdateQualificationTypeRequest;
}
export declare class UpdateQualificationTypeResponse extends SpeakeasyBase {
    contentType: string;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
    updateQualificationTypeResponse?: shared.UpdateQualificationTypeResponse;
}
