import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UnassignLabelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=labelId" })
  labelId: string;
}


export class UnassignLabelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UnassignLabelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UnassignLabelPathParams;

  @Metadata()
  security: UnassignLabelSecurity;
}


export class UnassignLabelResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  label?: any;

  @Metadata()
  statusCode: number;
}
