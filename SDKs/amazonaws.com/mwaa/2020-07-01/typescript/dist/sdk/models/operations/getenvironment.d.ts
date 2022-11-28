import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEnvironmentPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GetEnvironmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEnvironmentRequest extends SpeakeasyBase {
    pathParams: GetEnvironmentPathParams;
    headers: GetEnvironmentHeaders;
}
export declare class GetEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    getEnvironmentOutput?: shared.GetEnvironmentOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
