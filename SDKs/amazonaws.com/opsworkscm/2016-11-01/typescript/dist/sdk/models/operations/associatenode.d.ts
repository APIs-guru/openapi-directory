import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateNodeXAmzTargetEnum {
    OpsWorksCmV20161101AssociateNode = "OpsWorksCM_V2016_11_01.AssociateNode"
}
export declare class AssociateNodeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateNodeXAmzTargetEnum;
}
export declare class AssociateNodeRequest extends SpeakeasyBase {
    headers: AssociateNodeHeaders;
    request: shared.AssociateNodeRequest;
}
export declare class AssociateNodeResponse extends SpeakeasyBase {
    associateNodeResponse?: shared.AssociateNodeResponse;
    contentType: string;
    invalidStateException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
