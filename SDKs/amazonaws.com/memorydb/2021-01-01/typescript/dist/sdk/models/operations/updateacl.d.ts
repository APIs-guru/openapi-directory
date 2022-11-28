import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateAclxAmzTargetEnum {
    AmazonMemoryDbUpdateAcl = "AmazonMemoryDB.UpdateACL"
}
export declare class UpdateAclHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAclxAmzTargetEnum;
}
export declare class UpdateAclRequest extends SpeakeasyBase {
    headers: UpdateAclHeaders;
    request: shared.UpdateAclRequest;
}
export declare class UpdateAclResponse extends SpeakeasyBase {
    aclNotFoundFault?: any;
    contentType: string;
    defaultUserRequired?: any;
    duplicateUserNameFault?: any;
    invalidAclStateFault?: any;
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    statusCode: number;
    updateAclResponse?: shared.UpdateAclResponse;
    userNotFoundFault?: any;
}
