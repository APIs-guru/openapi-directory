import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PhoneNumberValidateHeaders extends SpeakeasyBase {
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


// PhoneNumberValidateRequestBodyNumberValidateRequest
/** 
 * Specifies a phone number to validate and retrieve information about.
**/
export class PhoneNumberValidateRequestBodyNumberValidateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IsoCountryCode" })
  isoCountryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;
}


export class PhoneNumberValidateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NumberValidateRequest" })
  numberValidateRequest: PhoneNumberValidateRequestBodyNumberValidateRequest;
}


export class PhoneNumberValidateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PhoneNumberValidateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PhoneNumberValidateRequestBody;
}


export class PhoneNumberValidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  forbiddenException?: any;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  methodNotAllowedException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  payloadTooLargeException?: any;

  @SpeakeasyMetadata()
  phoneNumberValidateResponse?: shared.PhoneNumberValidateResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
