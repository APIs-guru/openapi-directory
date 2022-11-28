import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EinVerificationLookupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tight" })
  tight?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


export class EinVerificationLookupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class EinVerificationLookupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EinVerificationLookupQueryParams;

  @SpeakeasyMetadata()
  security: EinVerificationLookupSecurity;
}


export class EinVerificationLookupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  einVerificationLookup200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  einVerificationLookupDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
