import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetContactListPathParams extends SpeakeasyBase {
    contactListName: string;
}
export declare class GetContactListHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetContactListRequest extends SpeakeasyBase {
    pathParams: GetContactListPathParams;
    headers: GetContactListHeaders;
}
export declare class GetContactListResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getContactListResponse?: shared.GetContactListResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
