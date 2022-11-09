import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateParameterGroupXAmzTargetEnum {
    AmazonMemoryDbCreateParameterGroup = "AmazonMemoryDB.CreateParameterGroup"
}
export declare class CreateParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateParameterGroupXAmzTargetEnum;
}
export declare class CreateParameterGroupRequest extends SpeakeasyBase {
    headers: CreateParameterGroupHeaders;
    request: shared.CreateParameterGroupRequest;
}
export declare class CreateParameterGroupResponse extends SpeakeasyBase {
    contentType: string;
    createParameterGroupResponse?: shared.CreateParameterGroupResponse;
    invalidParameterCombinationException?: any;
    invalidParameterGroupStateFault?: any;
    invalidParameterValueException?: any;
    parameterGroupAlreadyExistsFault?: any;
    parameterGroupQuotaExceededFault?: any;
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
    tagQuotaPerResourceExceeded?: any;
}
