import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VatBasicPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;
}


export class VatBasicRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=companyAddress;" })
  companyAddress?: string;

  @SpeakeasyMetadata({ data: "form, name=companyName;" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "form, name=companyNumber;" })
  companyNumber?: string;

  @SpeakeasyMetadata({ data: "form, name=vatNumber;" })
  vatNumber: string;
}


export class VatBasicSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class VatBasicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VatBasicPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: VatBasicRequestBody;

  @SpeakeasyMetadata()
  security: VatBasicSecurity;
}


export class VatBasicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  vatBasic200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  vatBasicDefaultApplicationJsonAny?: any;
}
