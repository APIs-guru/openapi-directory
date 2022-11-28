import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { BaseF3PFiling } from "./basef3pfiling";



export class BaseF3PFilingPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: BaseF3PFiling })
  results?: BaseF3PFiling[];
}
