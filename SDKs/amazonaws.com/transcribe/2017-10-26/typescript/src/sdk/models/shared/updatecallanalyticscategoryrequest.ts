import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";



export class UpdateCallAnalyticsCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CategoryName" })
  categoryName: string;

  @SpeakeasyMetadata({ data: "json, name=Rules", elemType: Rule })
  rules: Rule[];
}
