import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SystemInstanceDescription } from "./systeminstancedescription";


export class GetSystemInstanceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: SystemInstanceDescription;
}
