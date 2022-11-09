import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PhoneNumberValidateHeaders extends SpeakeasyBase {
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


// PhoneNumberValidateRequestBodyNumberValidateRequest
/** 
 * Specifies a phone number to validate and retrieve information about.
**/
export class PhoneNumberValidateRequestBodyNumberValidateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=IsoCountryCode" })
  isoCountryCode?: string;

  @Metadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;
}


export class PhoneNumberValidateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=NumberValidateRequest" })
  numberValidateRequest: PhoneNumberValidateRequestBodyNumberValidateRequest;
}


export class PhoneNumberValidateRequest extends SpeakeasyBase {
  @Metadata()
  headers: PhoneNumberValidateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PhoneNumberValidateRequestBody;
}


export class PhoneNumberValidateResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  methodNotAllowedException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  payloadTooLargeException?: any;

  @Metadata()
  phoneNumberValidateResponse?: shared.PhoneNumberValidateResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
