import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CategoryProperties } from "./categoryproperties";


export class CreateCallAnalyticsCategoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CategoryProperties" })
  categoryProperties?: CategoryProperties;
}
