import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AssignLabelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class AssignLabelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=label;" })
  label: string;
}


export class AssignLabelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AssignLabelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AssignLabelPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: AssignLabelRequestBody;

  @Metadata()
  security: AssignLabelSecurity;
}


export class AssignLabelResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  label?: any;

  @Metadata()
  statusCode: number;
}
