import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutEmailIdentityDkimSigningAttributesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmailIdentity" })
  emailIdentity: string;
}


export class PutEmailIdentityDkimSigningAttributesHeaders extends SpeakeasyBase {
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


// PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes
/** 
 * An object that contains information about the tokens used for setting up Bring Your Own DKIM (BYODKIM).
**/
export class PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainSigningPrivateKey" })
  domainSigningPrivateKey?: string;

  @Metadata({ data: "json, name=DomainSigningSelector" })
  domainSigningSelector?: string;
}

export enum PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnum {
    AwsSes = "AWS_SES"
,    External = "EXTERNAL"
}


export class PutEmailIdentityDkimSigningAttributesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=SigningAttributes" })
  signingAttributes?: PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes;

  @Metadata({ data: "json, name=SigningAttributesOrigin" })
  signingAttributesOrigin: PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnum;
}


export class PutEmailIdentityDkimSigningAttributesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutEmailIdentityDkimSigningAttributesPathParams;

  @Metadata()
  headers: PutEmailIdentityDkimSigningAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutEmailIdentityDkimSigningAttributesRequestBody;
}


export class PutEmailIdentityDkimSigningAttributesResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  putEmailIdentityDkimSigningAttributesResponse?: shared.PutEmailIdentityDkimSigningAttributesResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
