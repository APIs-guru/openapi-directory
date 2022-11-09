import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AssignLabelsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AssignLabelsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=labels;" })
  labels: string[];
}


export class AssignLabelsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AssignLabelsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AssignLabelsPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: AssignLabelsRequestBody;

  @Metadata()
  security: AssignLabelsSecurity;
}


export class AssignLabelsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  labelIds?: any[];

  @Metadata()
  statusCode: number;
}
