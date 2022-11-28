import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisassociateTrialComponentXAmzTargetEnum {
    SageMakerDisassociateTrialComponent = "SageMaker.DisassociateTrialComponent"
}
export declare class DisassociateTrialComponentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateTrialComponentXAmzTargetEnum;
}
export declare class DisassociateTrialComponentRequest extends SpeakeasyBase {
    headers: DisassociateTrialComponentHeaders;
    request: shared.DisassociateTrialComponentRequest;
}
export declare class DisassociateTrialComponentResponse extends SpeakeasyBase {
    contentType: string;
    disassociateTrialComponentResponse?: shared.DisassociateTrialComponentResponse;
    resourceNotFound?: any;
    statusCode: number;
}
