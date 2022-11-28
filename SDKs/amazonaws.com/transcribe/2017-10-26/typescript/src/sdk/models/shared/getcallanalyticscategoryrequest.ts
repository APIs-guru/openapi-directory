import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCallAnalyticsCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CategoryName" })
  categoryName: string;
}
