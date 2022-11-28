import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class NifComprehensivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;
}


export class NifComprehensiveRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=companyAddress;" })
  companyAddress?: string;

  @SpeakeasyMetadata({ data: "form, name=companyName;" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "form, name=nifNumber;" })
  nifNumber: string;
}


export class NifComprehensiveSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class NifComprehensiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NifComprehensivePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: NifComprehensiveRequestBody;

  @SpeakeasyMetadata()
  security: NifComprehensiveSecurity;
}


export class NifComprehensiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nifComprehensive200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  nifComprehensiveDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
