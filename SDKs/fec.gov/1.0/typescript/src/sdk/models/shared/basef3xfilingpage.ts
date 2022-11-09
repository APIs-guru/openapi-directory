import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OffsetInfo } from "./offsetinfo";
import { BaseF3XFiling } from "./basef3xfiling";


export class BaseF3XFilingPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: shared.BaseF3XFiling })
  results?: BaseF3XFiling[];
}
