import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VatComprehensivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;
}


export class VatComprehensiveRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=companyAddress;" })
  companyAddress?: string;

  @SpeakeasyMetadata({ data: "form, name=companyName;" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "form, name=companyNumber;" })
  companyNumber?: string;

  @SpeakeasyMetadata({ data: "form, name=vatNumber;" })
  vatNumber: string;
}


export class VatComprehensiveSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class VatComprehensiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VatComprehensivePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: VatComprehensiveRequestBody;

  @SpeakeasyMetadata()
  security: VatComprehensiveSecurity;
}


export class VatComprehensiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  vatComprehensive200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  vatComprehensiveDefaultApplicationJsonAny?: any;
}
