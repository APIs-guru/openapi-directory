import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCliTokenPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CreateCliTokenHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateCliTokenRequest extends SpeakeasyBase {
    pathParams: CreateCliTokenPathParams;
    headers: CreateCliTokenHeaders;
}
export declare class CreateCliTokenResponse extends SpeakeasyBase {
    contentType: string;
    createCliTokenResponse?: shared.CreateCliTokenResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
