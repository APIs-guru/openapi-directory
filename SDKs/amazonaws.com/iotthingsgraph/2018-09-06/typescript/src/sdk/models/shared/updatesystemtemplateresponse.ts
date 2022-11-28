import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SystemTemplateSummary } from "./systemtemplatesummary";



export class UpdateSystemTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: SystemTemplateSummary;
}
