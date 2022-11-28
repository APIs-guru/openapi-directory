import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class NifBasicPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;
}


export class NifBasicRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=companyAddress;" })
  companyAddress?: string;

  @SpeakeasyMetadata({ data: "form, name=companyName;" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "form, name=nifNumber;" })
  nifNumber: string;
}


export class NifBasicSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class NifBasicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NifBasicPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: NifBasicRequestBody;

  @SpeakeasyMetadata()
  security: NifBasicSecurity;
}


export class NifBasicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nifBasic200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  nifBasicDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
