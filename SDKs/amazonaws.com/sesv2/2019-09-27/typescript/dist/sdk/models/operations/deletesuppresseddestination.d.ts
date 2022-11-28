import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteSuppressedDestinationPathParams extends SpeakeasyBase {
    emailAddress: string;
}
export declare class DeleteSuppressedDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteSuppressedDestinationRequest extends SpeakeasyBase {
    pathParams: DeleteSuppressedDestinationPathParams;
    headers: DeleteSuppressedDestinationHeaders;
}
export declare class DeleteSuppressedDestinationResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteSuppressedDestinationResponse?: Map<string, any>;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
