import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateAliasPathParams extends SpeakeasyBase {
    functionName: string;
    name: string;
}
export declare class UpdateAliasHeaders extends SpeakeasyBase {
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
export declare class UpdateAliasRequestBodyRoutingConfig extends SpeakeasyBase {
    additionalVersionWeights?: Map<string, number>;
}
export declare class UpdateAliasRequestBody extends SpeakeasyBase {
    description?: string;
    functionVersion?: string;
    revisionId?: string;
    routingConfig?: UpdateAliasRequestBodyRoutingConfig;
}
export declare class UpdateAliasRequest extends SpeakeasyBase {
    pathParams: UpdateAliasPathParams;
    headers: UpdateAliasHeaders;
    request: UpdateAliasRequestBody;
}
export declare class UpdateAliasResponse extends SpeakeasyBase {
    aliasConfiguration?: shared.AliasConfiguration;
    contentType: string;
    invalidParameterValueException?: any;
    preconditionFailedException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
