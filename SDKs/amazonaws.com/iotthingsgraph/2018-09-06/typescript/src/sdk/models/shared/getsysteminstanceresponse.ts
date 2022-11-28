import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SystemInstanceDescription } from "./systeminstancedescription";



export class GetSystemInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: SystemInstanceDescription;
}
