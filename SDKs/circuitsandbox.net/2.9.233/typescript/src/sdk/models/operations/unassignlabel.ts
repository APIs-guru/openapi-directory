import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UnassignLabelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=labelId" })
  labelId: string;
}


export class UnassignLabelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UnassignLabelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnassignLabelPathParams;

  @SpeakeasyMetadata()
  security: UnassignLabelSecurity;
}


export class UnassignLabelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  label?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
