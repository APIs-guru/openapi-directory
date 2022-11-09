import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NifComprehensivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;
}


export class NifComprehensiveRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=companyAddress;" })
  companyAddress?: string;

  @Metadata({ data: "form, name=companyName;" })
  companyName?: string;

  @Metadata({ data: "form, name=nifNumber;" })
  nifNumber: string;
}


export class NifComprehensiveSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class NifComprehensiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NifComprehensivePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: NifComprehensiveRequestBody;

  @Metadata()
  security: NifComprehensiveSecurity;
}


export class NifComprehensiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nifComprehensive200ApplicationJsonAny?: any;

  @Metadata()
  nifComprehensiveDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
