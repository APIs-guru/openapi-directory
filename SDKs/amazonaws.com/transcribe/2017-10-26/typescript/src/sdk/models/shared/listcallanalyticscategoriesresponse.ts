import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CategoryProperties } from "./categoryproperties";


export class ListCallAnalyticsCategoriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Categories", elemType: shared.CategoryProperties })
  categories?: CategoryProperties[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
