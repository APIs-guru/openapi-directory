import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InAppTemplateResponse } from "./inapptemplateresponse";



export class GetInAppTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InAppTemplateResponse" })
  inAppTemplateResponse: InAppTemplateResponse;
}
