import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisassociateNodeXAmzTargetEnum {
    OpsWorksCmV20161101DisassociateNode = "OpsWorksCM_V2016_11_01.DisassociateNode"
}
export declare class DisassociateNodeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateNodeXAmzTargetEnum;
}
export declare class DisassociateNodeRequest extends SpeakeasyBase {
    headers: DisassociateNodeHeaders;
    request: shared.DisassociateNodeRequest;
}
export declare class DisassociateNodeResponse extends SpeakeasyBase {
    contentType: string;
    disassociateNodeResponse?: shared.DisassociateNodeResponse;
    invalidStateException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
