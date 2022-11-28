import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssignInstanceXAmzTargetEnum {
    OpsWorks20130218AssignInstance = "OpsWorks_20130218.AssignInstance"
}
export declare class AssignInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssignInstanceXAmzTargetEnum;
}
export declare class AssignInstanceRequest extends SpeakeasyBase {
    headers: AssignInstanceHeaders;
    request: shared.AssignInstanceRequest;
}
export declare class AssignInstanceResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
