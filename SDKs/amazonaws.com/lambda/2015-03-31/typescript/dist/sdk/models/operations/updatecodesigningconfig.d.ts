import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateCodeSigningConfigPathParams extends SpeakeasyBase {
    codeSigningConfigArn: string;
}
export declare class UpdateCodeSigningConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * List of signing profiles that can sign a code package.
**/
export declare class UpdateCodeSigningConfigRequestBodyAllowedPublishers extends SpeakeasyBase {
    signingProfileVersionArns?: string[];
}
/**
 * Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.
**/
export declare class UpdateCodeSigningConfigRequestBodyCodeSigningPolicies extends SpeakeasyBase {
    untrustedArtifactOnDeployment?: shared.CodeSigningPolicyEnum;
}
export declare class UpdateCodeSigningConfigRequestBody extends SpeakeasyBase {
    allowedPublishers?: UpdateCodeSigningConfigRequestBodyAllowedPublishers;
    codeSigningPolicies?: UpdateCodeSigningConfigRequestBodyCodeSigningPolicies;
    description?: string;
}
export declare class UpdateCodeSigningConfigRequest extends SpeakeasyBase {
    pathParams: UpdateCodeSigningConfigPathParams;
    headers: UpdateCodeSigningConfigHeaders;
    request: UpdateCodeSigningConfigRequestBody;
}
export declare class UpdateCodeSigningConfigResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    updateCodeSigningConfigResponse?: shared.UpdateCodeSigningConfigResponse;
}
