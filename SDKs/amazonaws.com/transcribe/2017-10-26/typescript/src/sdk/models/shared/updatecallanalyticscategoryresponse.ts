import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CategoryProperties } from "./categoryproperties";


export class UpdateCallAnalyticsCategoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CategoryProperties" })
  categoryProperties?: CategoryProperties;
}
