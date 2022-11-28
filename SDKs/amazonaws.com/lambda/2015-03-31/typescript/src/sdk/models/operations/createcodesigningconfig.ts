import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateCodeSigningConfigHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateCodeSigningConfigRequestBodyAllowedPublishers
/** 
 * List of signing profiles that can sign a code package. 
**/
export class CreateCodeSigningConfigRequestBodyAllowedPublishers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SigningProfileVersionArns" })
  signingProfileVersionArns?: string[];
}


// CreateCodeSigningConfigRequestBodyCodeSigningPolicies
/** 
 * Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.
**/
export class CreateCodeSigningConfigRequestBodyCodeSigningPolicies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UntrustedArtifactOnDeployment" })
  untrustedArtifactOnDeployment?: shared.CodeSigningPolicyEnum;
}


export class CreateCodeSigningConfigRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowedPublishers" })
  allowedPublishers: CreateCodeSigningConfigRequestBodyAllowedPublishers;

  @SpeakeasyMetadata({ data: "json, name=CodeSigningPolicies" })
  codeSigningPolicies?: CreateCodeSigningConfigRequestBodyCodeSigningPolicies;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;
}


export class CreateCodeSigningConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateCodeSigningConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateCodeSigningConfigRequestBody;
}


export class CreateCodeSigningConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createCodeSigningConfigResponse?: shared.CreateCodeSigningConfigResponse;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
