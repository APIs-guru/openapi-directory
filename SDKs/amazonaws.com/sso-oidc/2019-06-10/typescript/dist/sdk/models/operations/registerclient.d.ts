import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RegisterClientHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RegisterClientRequestBody extends SpeakeasyBase {
    clientName: string;
    clientType: string;
    scopes?: string[];
}
export declare class RegisterClientRequest extends SpeakeasyBase {
    headers: RegisterClientHeaders;
    request: RegisterClientRequestBody;
}
export declare class RegisterClientResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidClientMetadataException?: any;
    invalidRequestException?: any;
    invalidScopeException?: any;
    registerClientResponse?: shared.RegisterClientResponse;
    statusCode: number;
}
