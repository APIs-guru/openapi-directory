import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutSuppressedDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum PutSuppressedDestinationRequestBodyReasonEnum {
    Bounce = "BOUNCE",
    Complaint = "COMPLAINT"
}
export declare class PutSuppressedDestinationRequestBody extends SpeakeasyBase {
    emailAddress: string;
    reason: PutSuppressedDestinationRequestBodyReasonEnum;
}
export declare class PutSuppressedDestinationRequest extends SpeakeasyBase {
    headers: PutSuppressedDestinationHeaders;
    request: PutSuppressedDestinationRequestBody;
}
export declare class PutSuppressedDestinationResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    putSuppressedDestinationResponse?: Map<string, any>;
    statusCode: number;
    tooManyRequestsException?: any;
}
