import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCallAnalyticsCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CategoryName" })
  categoryName: string;
}
