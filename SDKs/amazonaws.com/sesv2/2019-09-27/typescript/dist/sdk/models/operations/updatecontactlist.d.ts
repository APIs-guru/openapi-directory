import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateContactListPathParams extends SpeakeasyBase {
    contactListName: string;
}
export declare class UpdateContactListHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateContactListRequestBody extends SpeakeasyBase {
    description?: string;
    topics?: shared.Topic[];
}
export declare class UpdateContactListRequest extends SpeakeasyBase {
    pathParams: UpdateContactListPathParams;
    headers: UpdateContactListHeaders;
    request: UpdateContactListRequestBody;
}
export declare class UpdateContactListResponse extends SpeakeasyBase {
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateContactListResponse?: Map<string, any>;
}
