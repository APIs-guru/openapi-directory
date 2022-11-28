import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateQualificationTypeXAmzTargetEnum {
    MTurkRequesterServiceV20170117CreateQualificationType = "MTurkRequesterServiceV20170117.CreateQualificationType"
}
export declare class CreateQualificationTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateQualificationTypeXAmzTargetEnum;
}
export declare class CreateQualificationTypeRequest extends SpeakeasyBase {
    headers: CreateQualificationTypeHeaders;
    request: shared.CreateQualificationTypeRequest;
}
export declare class CreateQualificationTypeResponse extends SpeakeasyBase {
    contentType: string;
    createQualificationTypeResponse?: shared.CreateQualificationTypeResponse;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
