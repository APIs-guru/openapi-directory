import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TinVerificationNameLookupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=tin" })
  tin: string;
}


export class TinVerificationNameLookupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class TinVerificationNameLookupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TinVerificationNameLookupQueryParams;

  @Metadata()
  security: TinVerificationNameLookupSecurity;
}


export class TinVerificationNameLookupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tinVerificationNameLookup200ApplicationJsonAny?: any;

  @Metadata()
  tinVerificationNameLookupDefaultApplicationJsonAny?: any;
}
