import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";



// CategoryProperties
/** 
 * An object that contains the rules and additional information about a call analytics category.
**/
export class CategoryProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CategoryName" })
  categoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Rules", elemType: Rule })
  rules?: Rule[];
}
