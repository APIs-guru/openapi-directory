import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UnassignLabelsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UnassignLabelsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=labelIds;" })
  labelIds: string[];
}


export class UnassignLabelsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UnassignLabelsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UnassignLabelsPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: UnassignLabelsRequestBody;

  @Metadata()
  security: UnassignLabelsSecurity;
}


export class UnassignLabelsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  labelIds?: any[];

  @Metadata()
  statusCode: number;
}
