import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SystemTemplateDescription } from "./systemtemplatedescription";


export class GetSystemTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: SystemTemplateDescription;
}
