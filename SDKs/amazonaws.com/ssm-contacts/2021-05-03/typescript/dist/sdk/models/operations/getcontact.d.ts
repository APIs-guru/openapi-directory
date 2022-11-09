import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetContactXAmzTargetEnum {
    SsmContactsGetContact = "SSMContacts.GetContact"
}
export declare class GetContactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetContactXAmzTargetEnum;
}
export declare class GetContactRequest extends SpeakeasyBase {
    headers: GetContactHeaders;
    request: shared.GetContactRequest;
}
export declare class GetContactResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    dataEncryptionException?: any;
    getContactResult?: shared.GetContactResult;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
