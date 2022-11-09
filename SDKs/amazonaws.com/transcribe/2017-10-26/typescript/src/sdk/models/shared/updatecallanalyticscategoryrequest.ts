import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Rule } from "./rule";


export class UpdateCallAnalyticsCategoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CategoryName" })
  categoryName: string;

  @Metadata({ data: "json, name=Rules", elemType: shared.Rule })
  rules: Rule[];
}
