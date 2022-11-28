import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateContactListHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateContactListRequestBody extends SpeakeasyBase {
    contactListName: string;
    description?: string;
    tags?: shared.Tag[];
    topics?: shared.Topic[];
}
export declare class CreateContactListRequest extends SpeakeasyBase {
    headers: CreateContactListHeaders;
    request: CreateContactListRequestBody;
}
export declare class CreateContactListResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    badRequestException?: any;
    contentType: string;
    createContactListResponse?: Map<string, any>;
    limitExceededException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
