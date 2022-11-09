import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VatComprehensivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;
}


export class VatComprehensiveRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=companyAddress;" })
  companyAddress?: string;

  @Metadata({ data: "form, name=companyName;" })
  companyName?: string;

  @Metadata({ data: "form, name=companyNumber;" })
  companyNumber?: string;

  @Metadata({ data: "form, name=vatNumber;" })
  vatNumber: string;
}


export class VatComprehensiveSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class VatComprehensiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VatComprehensivePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: VatComprehensiveRequestBody;

  @Metadata()
  security: VatComprehensiveSecurity;
}


export class VatComprehensiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  vatComprehensive200ApplicationJsonAny?: any;

  @Metadata()
  vatComprehensiveDefaultApplicationJsonAny?: any;
}
