import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateParameterGroupXAmzTargetEnum {
    AmazonMemoryDbUpdateParameterGroup = "AmazonMemoryDB.UpdateParameterGroup"
}
export declare class UpdateParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateParameterGroupXAmzTargetEnum;
}
export declare class UpdateParameterGroupRequest extends SpeakeasyBase {
    headers: UpdateParameterGroupHeaders;
    request: shared.UpdateParameterGroupRequest;
}
export declare class UpdateParameterGroupResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterCombinationException?: any;
    invalidParameterGroupStateFault?: any;
    invalidParameterValueException?: any;
    parameterGroupNotFoundFault?: any;
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
    updateParameterGroupResponse?: shared.UpdateParameterGroupResponse;
}
