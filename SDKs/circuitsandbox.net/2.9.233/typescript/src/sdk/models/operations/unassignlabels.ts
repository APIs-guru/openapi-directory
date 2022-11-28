import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UnassignLabelsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UnassignLabelsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=labelIds;" })
  labelIds: string[];
}


export class UnassignLabelsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UnassignLabelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnassignLabelsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: UnassignLabelsRequestBody;

  @SpeakeasyMetadata()
  security: UnassignLabelsSecurity;
}


export class UnassignLabelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  labelIds?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
