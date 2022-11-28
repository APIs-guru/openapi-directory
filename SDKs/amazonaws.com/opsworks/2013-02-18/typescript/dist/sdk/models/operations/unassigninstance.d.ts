import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UnassignInstanceXAmzTargetEnum {
    OpsWorks20130218UnassignInstance = "OpsWorks_20130218.UnassignInstance"
}
export declare class UnassignInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UnassignInstanceXAmzTargetEnum;
}
export declare class UnassignInstanceRequest extends SpeakeasyBase {
    headers: UnassignInstanceHeaders;
    request: shared.UnassignInstanceRequest;
}
export declare class UnassignInstanceResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
