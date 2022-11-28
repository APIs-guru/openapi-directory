import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateContactPathParams extends SpeakeasyBase {
    contactListName: string;
}
export declare class CreateContactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateContactRequestBody extends SpeakeasyBase {
    attributesData?: string;
    emailAddress: string;
    topicPreferences?: shared.TopicPreference[];
    unsubscribeAll?: boolean;
}
export declare class CreateContactRequest extends SpeakeasyBase {
    pathParams: CreateContactPathParams;
    headers: CreateContactHeaders;
    request: CreateContactRequestBody;
}
export declare class CreateContactResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    badRequestException?: any;
    contentType: string;
    createContactResponse?: Map<string, any>;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
