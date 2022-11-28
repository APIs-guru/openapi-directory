import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteContactPathParams extends SpeakeasyBase {
    contactListName: string;
    emailAddress: string;
}
export declare class DeleteContactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteContactRequest extends SpeakeasyBase {
    pathParams: DeleteContactPathParams;
    headers: DeleteContactHeaders;
}
export declare class DeleteContactResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteContactResponse?: Map<string, any>;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
