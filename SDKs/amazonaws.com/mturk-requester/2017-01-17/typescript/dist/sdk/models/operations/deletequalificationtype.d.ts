import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteQualificationTypeXAmzTargetEnum {
    MTurkRequesterServiceV20170117DeleteQualificationType = "MTurkRequesterServiceV20170117.DeleteQualificationType"
}
export declare class DeleteQualificationTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteQualificationTypeXAmzTargetEnum;
}
export declare class DeleteQualificationTypeRequest extends SpeakeasyBase {
    headers: DeleteQualificationTypeHeaders;
    request: shared.DeleteQualificationTypeRequest;
}
export declare class DeleteQualificationTypeResponse extends SpeakeasyBase {
    contentType: string;
    deleteQualificationTypeResponse?: Map<string, any>;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
