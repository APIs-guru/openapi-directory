import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SystemTemplateSummary } from "./systemtemplatesummary";


export class CreateSystemTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=summary" })
  summary?: SystemTemplateSummary;
}
