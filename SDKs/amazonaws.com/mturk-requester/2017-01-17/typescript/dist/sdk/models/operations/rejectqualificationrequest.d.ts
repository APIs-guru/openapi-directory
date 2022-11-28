import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RejectQualificationRequestXAmzTargetEnum {
    MTurkRequesterServiceV20170117RejectQualificationRequest = "MTurkRequesterServiceV20170117.RejectQualificationRequest"
}
export declare class RejectQualificationRequestHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RejectQualificationRequestXAmzTargetEnum;
}
export declare class RejectQualificationRequestRequest extends SpeakeasyBase {
    headers: RejectQualificationRequestHeaders;
    request: shared.RejectQualificationRequestRequest;
}
export declare class RejectQualificationRequestResponse extends SpeakeasyBase {
    contentType: string;
    rejectQualificationRequestResponse?: Map<string, any>;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
