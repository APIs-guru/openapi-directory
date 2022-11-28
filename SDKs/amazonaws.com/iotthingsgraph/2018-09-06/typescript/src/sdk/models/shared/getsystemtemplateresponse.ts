import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SystemTemplateDescription } from "./systemtemplatedescription";



export class GetSystemTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: SystemTemplateDescription;
}
