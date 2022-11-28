import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateEmailIdentityHeaders extends SpeakeasyBase {
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


// CreateEmailIdentityRequestBodyDkimSigningAttributes
/** 
 * An object that contains information about the tokens used for setting up Bring Your Own DKIM (BYODKIM).
**/
export class CreateEmailIdentityRequestBodyDkimSigningAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainSigningPrivateKey" })
  domainSigningPrivateKey?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainSigningSelector" })
  domainSigningSelector?: string;
}


export class CreateEmailIdentityRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationSetName" })
  configurationSetName?: string;

  @SpeakeasyMetadata({ data: "json, name=DkimSigningAttributes" })
  dkimSigningAttributes?: CreateEmailIdentityRequestBodyDkimSigningAttributes;

  @SpeakeasyMetadata({ data: "json, name=EmailIdentity" })
  emailIdentity: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateEmailIdentityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateEmailIdentityHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateEmailIdentityRequestBody;
}


export class CreateEmailIdentityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alreadyExistsException?: any;

  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  concurrentModificationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createEmailIdentityResponse?: shared.CreateEmailIdentityResponse;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
