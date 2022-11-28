import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateAclxAmzTargetEnum {
    AmazonMemoryDbCreateAcl = "AmazonMemoryDB.CreateACL"
}
export declare class CreateAclHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAclxAmzTargetEnum;
}
export declare class CreateAclRequest extends SpeakeasyBase {
    headers: CreateAclHeaders;
    request: shared.CreateAclRequest;
}
export declare class CreateAclResponse extends SpeakeasyBase {
    aclAlreadyExistsFault?: any;
    aclQuotaExceededFault?: any;
    contentType: string;
    createAclResponse?: shared.CreateAclResponse;
    defaultUserRequired?: any;
    duplicateUserNameFault?: any;
    invalidParameterValueException?: any;
    statusCode: number;
    tagQuotaPerResourceExceeded?: any;
    userNotFoundFault?: any;
}
