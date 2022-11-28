import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryProperties } from "./categoryproperties";



export class UpdateCallAnalyticsCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CategoryProperties" })
  categoryProperties?: CategoryProperties;
}
