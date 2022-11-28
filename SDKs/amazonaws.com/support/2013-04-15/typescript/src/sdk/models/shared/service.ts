import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";



// Service
/** 
 * Information about an AWS service returned by the <a>DescribeServices</a> operation.
**/
export class Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories", elemType: Category })
  categories?: Category[];

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
