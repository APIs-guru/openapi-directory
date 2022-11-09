import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetIceServerConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum GetIceServerConfigRequestBodyServiceEnum {
    Turn = "TURN"
}
export declare class GetIceServerConfigRequestBody extends SpeakeasyBase {
    channelArn: string;
    clientId?: string;
    service?: GetIceServerConfigRequestBodyServiceEnum;
    username?: string;
}
export declare class GetIceServerConfigRequest extends SpeakeasyBase {
    headers: GetIceServerConfigHeaders;
    request: GetIceServerConfigRequestBody;
}
export declare class GetIceServerConfigResponse extends SpeakeasyBase {
    clientLimitExceededException?: any;
    contentType: string;
    getIceServerConfigResponse?: shared.GetIceServerConfigResponse;
    invalidArgumentException?: any;
    invalidClientException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    sessionExpiredException?: any;
    statusCode: number;
}
