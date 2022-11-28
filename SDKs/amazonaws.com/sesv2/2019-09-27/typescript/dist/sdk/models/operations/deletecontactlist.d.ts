import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteContactListPathParams extends SpeakeasyBase {
    contactListName: string;
}
export declare class DeleteContactListHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteContactListRequest extends SpeakeasyBase {
    pathParams: DeleteContactListPathParams;
    headers: DeleteContactListHeaders;
}
export declare class DeleteContactListResponse extends SpeakeasyBase {
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    deleteContactListResponse?: Map<string, any>;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
