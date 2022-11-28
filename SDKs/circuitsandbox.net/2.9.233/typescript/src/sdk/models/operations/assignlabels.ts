import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AssignLabelsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AssignLabelsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=labels;" })
  labels: string[];
}


export class AssignLabelsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AssignLabelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AssignLabelsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: AssignLabelsRequestBody;

  @SpeakeasyMetadata()
  security: AssignLabelsSecurity;
}


export class AssignLabelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  labelIds?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
