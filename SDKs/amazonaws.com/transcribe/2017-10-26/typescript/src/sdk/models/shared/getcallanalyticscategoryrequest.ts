import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCallAnalyticsCategoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CategoryName" })
  categoryName: string;
}
