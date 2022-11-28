import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAccountRequest extends SpeakeasyBase {
    headers: GetAccountHeaders;
}
export declare class GetAccountResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getAccountResponse?: shared.GetAccountResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
