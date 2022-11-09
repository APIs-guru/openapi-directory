import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetCanaryPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GetCanaryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCanaryRequest extends SpeakeasyBase {
    pathParams: GetCanaryPathParams;
    headers: GetCanaryHeaders;
}
export declare class GetCanaryResponse extends SpeakeasyBase {
    contentType: string;
    getCanaryResponse?: shared.GetCanaryResponse;
    internalServerException?: any;
    statusCode: number;
    validationException?: any;
}
