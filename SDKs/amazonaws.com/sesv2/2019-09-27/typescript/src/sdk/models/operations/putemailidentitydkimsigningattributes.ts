import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutEmailIdentityDkimSigningAttributesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmailIdentity" })
  emailIdentity: string;
}


export class PutEmailIdentityDkimSigningAttributesHeaders extends SpeakeasyBase {
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


// PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes
/** 
 * An object that contains information about the tokens used for setting up Bring Your Own DKIM (BYODKIM).
**/
export class PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainSigningPrivateKey" })
  domainSigningPrivateKey?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainSigningSelector" })
  domainSigningSelector?: string;
}

export enum PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnum {
    AwsSes = "AWS_SES",
    External = "EXTERNAL"
}


export class PutEmailIdentityDkimSigningAttributesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SigningAttributes" })
  signingAttributes?: PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes;

  @SpeakeasyMetadata({ data: "json, name=SigningAttributesOrigin" })
  signingAttributesOrigin: PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnum;
}


export class PutEmailIdentityDkimSigningAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutEmailIdentityDkimSigningAttributesPathParams;

  @SpeakeasyMetadata()
  headers: PutEmailIdentityDkimSigningAttributesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutEmailIdentityDkimSigningAttributesRequestBody;
}


export class PutEmailIdentityDkimSigningAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  putEmailIdentityDkimSigningAttributesResponse?: shared.PutEmailIdentityDkimSigningAttributesResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
