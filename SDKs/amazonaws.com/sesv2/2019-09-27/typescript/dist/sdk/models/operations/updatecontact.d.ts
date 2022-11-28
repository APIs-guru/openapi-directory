import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateContactPathParams extends SpeakeasyBase {
    contactListName: string;
    emailAddress: string;
}
export declare class UpdateContactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateContactRequestBody extends SpeakeasyBase {
    attributesData?: string;
    topicPreferences?: shared.TopicPreference[];
    unsubscribeAll?: boolean;
}
export declare class UpdateContactRequest extends SpeakeasyBase {
    pathParams: UpdateContactPathParams;
    headers: UpdateContactHeaders;
    request: UpdateContactRequestBody;
}
export declare class UpdateContactResponse extends SpeakeasyBase {
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateContactResponse?: Map<string, any>;
}
