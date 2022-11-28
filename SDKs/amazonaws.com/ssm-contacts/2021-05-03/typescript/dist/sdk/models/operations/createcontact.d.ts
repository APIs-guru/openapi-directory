import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateContactXAmzTargetEnum {
    SsmContactsCreateContact = "SSMContacts.CreateContact"
}
export declare class CreateContactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateContactXAmzTargetEnum;
}
export declare class CreateContactRequest extends SpeakeasyBase {
    headers: CreateContactHeaders;
    request: shared.CreateContactRequest;
}
export declare class CreateContactResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createContactResult?: shared.CreateContactResult;
    dataEncryptionException?: any;
    internalServerException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
