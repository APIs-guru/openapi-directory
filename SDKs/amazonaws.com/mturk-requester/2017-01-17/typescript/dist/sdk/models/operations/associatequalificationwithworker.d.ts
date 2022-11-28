import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateQualificationWithWorkerXAmzTargetEnum {
    MTurkRequesterServiceV20170117AssociateQualificationWithWorker = "MTurkRequesterServiceV20170117.AssociateQualificationWithWorker"
}
export declare class AssociateQualificationWithWorkerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateQualificationWithWorkerXAmzTargetEnum;
}
export declare class AssociateQualificationWithWorkerRequest extends SpeakeasyBase {
    headers: AssociateQualificationWithWorkerHeaders;
    request: shared.AssociateQualificationWithWorkerRequest;
}
export declare class AssociateQualificationWithWorkerResponse extends SpeakeasyBase {
    associateQualificationWithWorkerResponse?: Map<string, any>;
    contentType: string;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
