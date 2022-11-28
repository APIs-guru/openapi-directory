import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryProperties } from "./categoryproperties";



export class CreateCallAnalyticsCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CategoryProperties" })
  categoryProperties?: CategoryProperties;
}
