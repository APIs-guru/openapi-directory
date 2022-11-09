import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OffsetInfo } from "./offsetinfo";
import { BaseF3PFiling } from "./basef3pfiling";


export class BaseF3PFilingPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: shared.BaseF3PFiling })
  results?: BaseF3PFiling[];
}
