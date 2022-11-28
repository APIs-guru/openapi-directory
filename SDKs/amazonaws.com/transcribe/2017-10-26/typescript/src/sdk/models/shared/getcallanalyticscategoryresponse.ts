import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryProperties } from "./categoryproperties";



export class GetCallAnalyticsCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CategoryProperties" })
  categoryProperties?: CategoryProperties;
}
