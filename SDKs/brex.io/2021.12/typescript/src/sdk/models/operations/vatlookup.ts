import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VatLookupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;
}


export class VatLookupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=address;" })
  address?: string;

  @Metadata({ data: "form, name=name;" })
  name: string;
}


export class VatLookupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class VatLookupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VatLookupPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: VatLookupRequestBody;

  @Metadata()
  security: VatLookupSecurity;
}


export class VatLookupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  vatLookup200ApplicationJsonAny?: any;

  @Metadata()
  vatLookupDefaultApplicationJsonAny?: any;
}
