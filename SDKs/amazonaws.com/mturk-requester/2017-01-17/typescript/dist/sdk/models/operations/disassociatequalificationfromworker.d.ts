import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisassociateQualificationFromWorkerXAmzTargetEnum {
    MTurkRequesterServiceV20170117DisassociateQualificationFromWorker = "MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker"
}
export declare class DisassociateQualificationFromWorkerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateQualificationFromWorkerXAmzTargetEnum;
}
export declare class DisassociateQualificationFromWorkerRequest extends SpeakeasyBase {
    headers: DisassociateQualificationFromWorkerHeaders;
    request: shared.DisassociateQualificationFromWorkerRequest;
}
export declare class DisassociateQualificationFromWorkerResponse extends SpeakeasyBase {
    contentType: string;
    disassociateQualificationFromWorkerResponse?: Map<string, any>;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
