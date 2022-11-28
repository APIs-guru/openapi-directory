import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccessibilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AccessibilityRequest;
}


export class AccessibilityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getcurrentvalues?: shared.Getcurrentvalues;

  @SpeakeasyMetadata()
  statusCode: number;
}
