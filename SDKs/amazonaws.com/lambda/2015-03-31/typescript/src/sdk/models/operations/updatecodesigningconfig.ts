import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateCodeSigningConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CodeSigningConfigArn" })
  codeSigningConfigArn: string;
}


export class UpdateCodeSigningConfigHeaders extends SpeakeasyBase {
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


// UpdateCodeSigningConfigRequestBodyAllowedPublishers
/** 
 * List of signing profiles that can sign a code package. 
**/
export class UpdateCodeSigningConfigRequestBodyAllowedPublishers extends SpeakeasyBase {
  @Metadata({ data: "json, name=SigningProfileVersionArns" })
  signingProfileVersionArns?: string[];
}


// UpdateCodeSigningConfigRequestBodyCodeSigningPolicies
/** 
 * Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.
**/
export class UpdateCodeSigningConfigRequestBodyCodeSigningPolicies extends SpeakeasyBase {
  @Metadata({ data: "json, name=UntrustedArtifactOnDeployment" })
  untrustedArtifactOnDeployment?: shared.CodeSigningPolicyEnum;
}


export class UpdateCodeSigningConfigRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowedPublishers" })
  allowedPublishers?: UpdateCodeSigningConfigRequestBodyAllowedPublishers;

  @Metadata({ data: "json, name=CodeSigningPolicies" })
  codeSigningPolicies?: UpdateCodeSigningConfigRequestBodyCodeSigningPolicies;

  @Metadata({ data: "json, name=Description" })
  description?: string;
}


export class UpdateCodeSigningConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateCodeSigningConfigPathParams;

  @Metadata()
  headers: UpdateCodeSigningConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateCodeSigningConfigRequestBody;
}


export class UpdateCodeSigningConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateCodeSigningConfigResponse?: shared.UpdateCodeSigningConfigResponse;
}
