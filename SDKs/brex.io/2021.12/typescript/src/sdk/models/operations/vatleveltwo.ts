import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VatLevelTwoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;
}


export class VatLevelTwoRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=confirmation;" })
  confirmation?: boolean;

  @Metadata({ data: "form, name=vatNumber;" })
  vatNumber: string;
}


export class VatLevelTwoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class VatLevelTwoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VatLevelTwoPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: VatLevelTwoRequestBody;

  @Metadata()
  security: VatLevelTwoSecurity;
}


export class VatLevelTwoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  vatLevelTwo200ApplicationJsonAny?: any;

  @Metadata()
  vatLevelTwoDefaultApplicationJsonAny?: any;
}
