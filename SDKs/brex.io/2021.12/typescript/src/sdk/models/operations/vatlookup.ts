import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VatLookupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;
}


export class VatLookupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=address;" })
  address?: string;

  @SpeakeasyMetadata({ data: "form, name=name;" })
  name: string;
}


export class VatLookupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class VatLookupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VatLookupPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: VatLookupRequestBody;

  @SpeakeasyMetadata()
  security: VatLookupSecurity;
}


export class VatLookupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  vatLookup200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  vatLookupDefaultApplicationJsonAny?: any;
}
