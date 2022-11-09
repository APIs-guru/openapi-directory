import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EinVerificationLookupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tight" })
  tight?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


export class EinVerificationLookupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class EinVerificationLookupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EinVerificationLookupQueryParams;

  @Metadata()
  security: EinVerificationLookupSecurity;
}


export class EinVerificationLookupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  einVerificationLookup200ApplicationJsonAny?: any;

  @Metadata()
  einVerificationLookupDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
