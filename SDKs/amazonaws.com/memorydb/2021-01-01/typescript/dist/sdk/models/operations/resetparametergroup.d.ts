import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ResetParameterGroupXAmzTargetEnum {
    AmazonMemoryDbResetParameterGroup = "AmazonMemoryDB.ResetParameterGroup"
}
export declare class ResetParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResetParameterGroupXAmzTargetEnum;
}
export declare class ResetParameterGroupRequest extends SpeakeasyBase {
    headers: ResetParameterGroupHeaders;
    request: shared.ResetParameterGroupRequest;
}
export declare class ResetParameterGroupResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterCombinationException?: any;
    invalidParameterGroupStateFault?: any;
    invalidParameterValueException?: any;
    parameterGroupNotFoundFault?: any;
    resetParameterGroupResponse?: shared.ResetParameterGroupResponse;
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
}
