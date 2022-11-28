import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddLabelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=label;" })
  label: string;
}


export class AddLabelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AddLabelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: AddLabelRequestBody;

  @SpeakeasyMetadata()
  security: AddLabelSecurity;
}


export class AddLabelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  label?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
