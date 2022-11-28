import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveLabelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=labelId" })
  labelId: string;
}


export class RemoveLabelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class RemoveLabelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveLabelPathParams;

  @SpeakeasyMetadata()
  security: RemoveLabelSecurity;
}


export class RemoveLabelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  label?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
