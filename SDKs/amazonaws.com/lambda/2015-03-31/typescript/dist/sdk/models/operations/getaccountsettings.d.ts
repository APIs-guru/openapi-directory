import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAccountSettingsRequest extends SpeakeasyBase {
    headers: GetAccountSettingsHeaders;
}
export declare class GetAccountSettingsResponse extends SpeakeasyBase {
    contentType: string;
    getAccountSettingsResponse?: shared.GetAccountSettingsResponse;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
