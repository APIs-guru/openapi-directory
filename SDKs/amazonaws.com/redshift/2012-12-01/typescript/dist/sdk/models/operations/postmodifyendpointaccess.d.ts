import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyEndpointAccessActionEnum {
    ModifyEndpointAccess = "ModifyEndpointAccess"
}
export declare enum PostModifyEndpointAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostModifyEndpointAccessQueryParams extends SpeakeasyBase {
    action: PostModifyEndpointAccessActionEnum;
    version: PostModifyEndpointAccessVersionEnum;
}
export declare class PostModifyEndpointAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyEndpointAccessRequest extends SpeakeasyBase {
    queryParams: PostModifyEndpointAccessQueryParams;
    headers: PostModifyEndpointAccessHeaders;
    request?: Uint8Array;
}
export declare class PostModifyEndpointAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
