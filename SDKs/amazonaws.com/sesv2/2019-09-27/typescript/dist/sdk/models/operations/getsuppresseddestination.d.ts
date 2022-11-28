import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSuppressedDestinationPathParams extends SpeakeasyBase {
    emailAddress: string;
}
export declare class GetSuppressedDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSuppressedDestinationRequest extends SpeakeasyBase {
    pathParams: GetSuppressedDestinationPathParams;
    headers: GetSuppressedDestinationHeaders;
}
export declare class GetSuppressedDestinationResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getSuppressedDestinationResponse?: shared.GetSuppressedDestinationResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
