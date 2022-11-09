import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCodeSigningConfigHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateCodeSigningConfigRequestBodyAllowedPublishers
/** 
 * List of signing profiles that can sign a code package. 
**/
export class CreateCodeSigningConfigRequestBodyAllowedPublishers extends SpeakeasyBase {
  @Metadata({ data: "json, name=SigningProfileVersionArns" })
  signingProfileVersionArns?: string[];
}


// CreateCodeSigningConfigRequestBodyCodeSigningPolicies
/** 
 * Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.
**/
export class CreateCodeSigningConfigRequestBodyCodeSigningPolicies extends SpeakeasyBase {
  @Metadata({ data: "json, name=UntrustedArtifactOnDeployment" })
  untrustedArtifactOnDeployment?: shared.CodeSigningPolicyEnum;
}


export class CreateCodeSigningConfigRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowedPublishers" })
  allowedPublishers: CreateCodeSigningConfigRequestBodyAllowedPublishers;

  @Metadata({ data: "json, name=CodeSigningPolicies" })
  codeSigningPolicies?: CreateCodeSigningConfigRequestBodyCodeSigningPolicies;

  @Metadata({ data: "json, name=Description" })
  description?: string;
}


export class CreateCodeSigningConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateCodeSigningConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateCodeSigningConfigRequestBody;
}


export class CreateCodeSigningConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createCodeSigningConfigResponse?: shared.CreateCodeSigningConfigResponse;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;
}
