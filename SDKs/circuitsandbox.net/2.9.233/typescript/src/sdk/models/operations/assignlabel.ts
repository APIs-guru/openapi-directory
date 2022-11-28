import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AssignLabelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class AssignLabelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=label;" })
  label: string;
}


export class AssignLabelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AssignLabelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AssignLabelPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: AssignLabelRequestBody;

  @SpeakeasyMetadata()
  security: AssignLabelSecurity;
}


export class AssignLabelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  label?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
