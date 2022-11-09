import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Category
/** 
 * A JSON-formatted name/value pair that represents the category name and category code of the problem, selected from the <a>DescribeServices</a> response for each AWS service.
**/
export class Category extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
