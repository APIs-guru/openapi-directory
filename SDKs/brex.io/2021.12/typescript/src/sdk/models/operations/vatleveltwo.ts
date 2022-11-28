import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VatLevelTwoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;
}


export class VatLevelTwoRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=confirmation;" })
  confirmation?: boolean;

  @SpeakeasyMetadata({ data: "form, name=vatNumber;" })
  vatNumber: string;
}


export class VatLevelTwoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class VatLevelTwoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VatLevelTwoPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: VatLevelTwoRequestBody;

  @SpeakeasyMetadata()
  security: VatLevelTwoSecurity;
}


export class VatLevelTwoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  vatLevelTwo200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  vatLevelTwoDefaultApplicationJsonAny?: any;
}
