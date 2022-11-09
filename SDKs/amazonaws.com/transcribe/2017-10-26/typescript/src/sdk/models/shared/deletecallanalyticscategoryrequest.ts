import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCallAnalyticsCategoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CategoryName" })
  categoryName: string;
}
