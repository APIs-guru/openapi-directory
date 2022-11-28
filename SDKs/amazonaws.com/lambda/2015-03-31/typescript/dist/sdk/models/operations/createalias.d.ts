import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAliasPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class CreateAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.
**/
export declare class CreateAliasRequestBodyRoutingConfig extends SpeakeasyBase {
    additionalVersionWeights?: Map<string, number>;
}
export declare class CreateAliasRequestBody extends SpeakeasyBase {
    description?: string;
    functionVersion: string;
    name: string;
    routingConfig?: CreateAliasRequestBodyRoutingConfig;
}
export declare class CreateAliasRequest extends SpeakeasyBase {
    pathParams: CreateAliasPathParams;
    headers: CreateAliasHeaders;
    request: CreateAliasRequestBody;
}
export declare class CreateAliasResponse extends SpeakeasyBase {
    aliasConfiguration?: shared.AliasConfiguration;
    contentType: string;
    invalidParameterValueException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
