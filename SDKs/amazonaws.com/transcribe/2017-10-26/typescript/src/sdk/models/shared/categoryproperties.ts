import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Rule } from "./rule";


// CategoryProperties
/** 
 * An object that contains the rules and additional information about a call analytics category.
**/
export class CategoryProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=CategoryName" })
  categoryName?: string;

  @Metadata({ data: "json, name=CreateTime" })
  createTime?: Date;

  @Metadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=Rules", elemType: shared.Rule })
  rules?: Rule[];
}
