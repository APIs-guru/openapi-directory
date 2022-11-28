import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteContactXAmzTargetEnum {
    SsmContactsDeleteContact = "SSMContacts.DeleteContact"
}
export declare class DeleteContactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteContactXAmzTargetEnum;
}
export declare class DeleteContactRequest extends SpeakeasyBase {
    headers: DeleteContactHeaders;
    request: shared.DeleteContactRequest;
}
export declare class DeleteContactResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteContactResult?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
