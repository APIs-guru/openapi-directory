import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SystemTemplateSummary } from "./systemtemplatesummary";



export class CreateSystemTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: SystemTemplateSummary;
}
