import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateCodeSigningConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CodeSigningConfigArn" })
  codeSigningConfigArn: string;
}


export class UpdateCodeSigningConfigHeaders extends SpeakeasyBase {
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


// UpdateCodeSigningConfigRequestBodyAllowedPublishers
/** 
 * List of signing profiles that can sign a code package. 
**/
export class UpdateCodeSigningConfigRequestBodyAllowedPublishers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SigningProfileVersionArns" })
  signingProfileVersionArns?: string[];
}


// UpdateCodeSigningConfigRequestBodyCodeSigningPolicies
/** 
 * Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.
**/
export class UpdateCodeSigningConfigRequestBodyCodeSigningPolicies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UntrustedArtifactOnDeployment" })
  untrustedArtifactOnDeployment?: shared.CodeSigningPolicyEnum;
}


export class UpdateCodeSigningConfigRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowedPublishers" })
  allowedPublishers?: UpdateCodeSigningConfigRequestBodyAllowedPublishers;

  @SpeakeasyMetadata({ data: "json, name=CodeSigningPolicies" })
  codeSigningPolicies?: UpdateCodeSigningConfigRequestBodyCodeSigningPolicies;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;
}


export class UpdateCodeSigningConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateCodeSigningConfigPathParams;

  @SpeakeasyMetadata()
  headers: UpdateCodeSigningConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateCodeSigningConfigRequestBody;
}


export class UpdateCodeSigningConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateCodeSigningConfigResponse?: shared.UpdateCodeSigningConfigResponse;
}
