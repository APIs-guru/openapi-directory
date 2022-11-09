import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SystemTemplateSummary } from "./systemtemplatesummary";


export class UpdateSystemTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=summary" })
  summary?: SystemTemplateSummary;
}
