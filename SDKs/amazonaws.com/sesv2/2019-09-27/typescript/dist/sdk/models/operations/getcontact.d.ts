import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetContactPathParams extends SpeakeasyBase {
    contactListName: string;
    emailAddress: string;
}
export declare class GetContactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetContactRequest extends SpeakeasyBase {
    pathParams: GetContactPathParams;
    headers: GetContactHeaders;
}
export declare class GetContactResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getContactResponse?: shared.GetContactResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
