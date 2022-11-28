import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteAclxAmzTargetEnum {
    AmazonMemoryDbDeleteAcl = "AmazonMemoryDB.DeleteACL"
}
export declare class DeleteAclHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAclxAmzTargetEnum;
}
export declare class DeleteAclRequest extends SpeakeasyBase {
    headers: DeleteAclHeaders;
    request: shared.DeleteAclRequest;
}
export declare class DeleteAclResponse extends SpeakeasyBase {
    aclNotFoundFault?: any;
    contentType: string;
    deleteAclResponse?: shared.DeleteAclResponse;
    invalidAclStateFault?: any;
    invalidParameterValueException?: any;
    statusCode: number;
}
