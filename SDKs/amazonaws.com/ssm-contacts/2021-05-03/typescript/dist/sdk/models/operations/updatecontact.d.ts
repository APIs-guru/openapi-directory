import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateContactXAmzTargetEnum {
    SsmContactsUpdateContact = "SSMContacts.UpdateContact"
}
export declare class UpdateContactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateContactXAmzTargetEnum;
}
export declare class UpdateContactRequest extends SpeakeasyBase {
    headers: UpdateContactHeaders;
    request: shared.UpdateContactRequest;
}
export declare class UpdateContactResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    dataEncryptionException?: any;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    updateContactResult?: Map<string, any>;
    validationException?: any;
}
