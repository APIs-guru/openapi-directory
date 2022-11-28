import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAliasPathParams extends SpeakeasyBase {
    functionName: string;
    name: string;
}
export declare class GetAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAliasRequest extends SpeakeasyBase {
    pathParams: GetAliasPathParams;
    headers: GetAliasHeaders;
}
export declare class GetAliasResponse extends SpeakeasyBase {
    aliasConfiguration?: shared.AliasConfiguration;
    contentType: string;
    invalidParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
