import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccessibilityRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AccessibilityRequest;
}


export class AccessibilityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getcurrentvalues?: shared.Getcurrentvalues;

  @Metadata()
  statusCode: number;
}
