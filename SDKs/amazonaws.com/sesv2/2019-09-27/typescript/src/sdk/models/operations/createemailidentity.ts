import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateEmailIdentityHeaders extends SpeakeasyBase {
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


// CreateEmailIdentityRequestBodyDkimSigningAttributes
/** 
 * An object that contains information about the tokens used for setting up Bring Your Own DKIM (BYODKIM).
**/
export class CreateEmailIdentityRequestBodyDkimSigningAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainSigningPrivateKey" })
  domainSigningPrivateKey?: string;

  @Metadata({ data: "json, name=DomainSigningSelector" })
  domainSigningSelector?: string;
}


export class CreateEmailIdentityRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationSetName" })
  configurationSetName?: string;

  @Metadata({ data: "json, name=DkimSigningAttributes" })
  dkimSigningAttributes?: CreateEmailIdentityRequestBodyDkimSigningAttributes;

  @Metadata({ data: "json, name=EmailIdentity" })
  emailIdentity: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateEmailIdentityRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateEmailIdentityHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateEmailIdentityRequestBody;
}


export class CreateEmailIdentityResponse extends SpeakeasyBase {
  @Metadata()
  alreadyExistsException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createEmailIdentityResponse?: shared.CreateEmailIdentityResponse;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
