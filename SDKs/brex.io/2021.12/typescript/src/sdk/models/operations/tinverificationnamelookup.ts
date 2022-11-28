import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TinVerificationNameLookupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tin" })
  tin: string;
}


export class TinVerificationNameLookupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class TinVerificationNameLookupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TinVerificationNameLookupQueryParams;

  @SpeakeasyMetadata()
  security: TinVerificationNameLookupSecurity;
}


export class TinVerificationNameLookupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tinVerificationNameLookup200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  tinVerificationNameLookupDefaultApplicationJsonAny?: any;
}
