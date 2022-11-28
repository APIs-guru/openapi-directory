import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryProperties } from "./categoryproperties";



export class ListCallAnalyticsCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Categories", elemType: CategoryProperties })
  categories?: CategoryProperties[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
