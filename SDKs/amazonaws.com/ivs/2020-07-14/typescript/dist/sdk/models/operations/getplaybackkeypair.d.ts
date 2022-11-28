import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPlaybackKeyPairHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPlaybackKeyPairRequestBody extends SpeakeasyBase {
    arn: string;
}
export declare class GetPlaybackKeyPairRequest extends SpeakeasyBase {
    headers: GetPlaybackKeyPairHeaders;
    request: GetPlaybackKeyPairRequestBody;
}
export declare class GetPlaybackKeyPairResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getPlaybackKeyPairResponse?: shared.GetPlaybackKeyPairResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
