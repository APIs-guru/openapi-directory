import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateCodeSigningConfigHeaders extends SpeakeasyBase {
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
export declare class CreateCodeSigningConfigRequestBodyAllowedPublishers extends SpeakeasyBase {
    signingProfileVersionArns?: string[];
}
/**
 * Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.
**/
export declare class CreateCodeSigningConfigRequestBodyCodeSigningPolicies extends SpeakeasyBase {
    untrustedArtifactOnDeployment?: shared.CodeSigningPolicyEnum;
}
export declare class CreateCodeSigningConfigRequestBody extends SpeakeasyBase {
    allowedPublishers: CreateCodeSigningConfigRequestBodyAllowedPublishers;
    codeSigningPolicies?: CreateCodeSigningConfigRequestBodyCodeSigningPolicies;
    description?: string;
}
export declare class CreateCodeSigningConfigRequest extends SpeakeasyBase {
    headers: CreateCodeSigningConfigHeaders;
    request: CreateCodeSigningConfigRequestBody;
}
export declare class CreateCodeSigningConfigResponse extends SpeakeasyBase {
    contentType: string;
    createCodeSigningConfigResponse?: shared.CreateCodeSigningConfigResponse;
    invalidParameterValueException?: any;
    serviceException?: any;
    statusCode: number;
}
