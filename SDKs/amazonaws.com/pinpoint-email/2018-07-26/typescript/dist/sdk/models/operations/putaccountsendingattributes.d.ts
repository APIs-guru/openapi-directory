import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutAccountSendingAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutAccountSendingAttributesRequestBody extends SpeakeasyBase {
    sendingEnabled?: boolean;
}
export declare class PutAccountSendingAttributesRequest extends SpeakeasyBase {
    headers: PutAccountSendingAttributesHeaders;
    request: PutAccountSendingAttributesRequestBody;
}
export declare class PutAccountSendingAttributesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    putAccountSendingAttributesResponse?: Map<string, any>;
    statusCode: number;
    tooManyRequestsException?: any;
}
