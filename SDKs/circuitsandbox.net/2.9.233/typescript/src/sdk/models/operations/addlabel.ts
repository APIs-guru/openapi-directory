import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddLabelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=label;" })
  label: string;
}


export class AddLabelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AddLabelRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: AddLabelRequestBody;

  @Metadata()
  security: AddLabelSecurity;
}


export class AddLabelResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  label?: any;

  @Metadata()
  statusCode: number;
}
