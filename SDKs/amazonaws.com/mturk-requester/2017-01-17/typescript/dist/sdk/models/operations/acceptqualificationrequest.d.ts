import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AcceptQualificationRequestXAmzTargetEnum {
    MTurkRequesterServiceV20170117AcceptQualificationRequest = "MTurkRequesterServiceV20170117.AcceptQualificationRequest"
}
export declare class AcceptQualificationRequestHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AcceptQualificationRequestXAmzTargetEnum;
}
export declare class AcceptQualificationRequestRequest extends SpeakeasyBase {
    headers: AcceptQualificationRequestHeaders;
    request: shared.AcceptQualificationRequestRequest;
}
export declare class AcceptQualificationRequestResponse extends SpeakeasyBase {
    acceptQualificationRequestResponse?: Map<string, any>;
    contentType: string;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
