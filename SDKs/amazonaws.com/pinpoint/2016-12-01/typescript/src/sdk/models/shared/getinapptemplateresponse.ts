import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InAppTemplateResponse } from "./inapptemplateresponse";


export class GetInAppTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=InAppTemplateResponse" })
  inAppTemplateResponse: InAppTemplateResponse;
}
