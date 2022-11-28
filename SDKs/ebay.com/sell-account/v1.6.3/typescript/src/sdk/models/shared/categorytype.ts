import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CategoryType
/** 
 * The category type discerns whether the policy covers the sale of motor vehicles (via eBay Motors), or the sale of everything except motor vehicles. Each business policy can be associated with either or both categories ('MOTORS_VEHICLES' and 'ALL_EXCLUDING_MOTORS_VEHICLES'); however,the 'MOTORS_VEHICLES' category type is not valid for return policies&ndash;return policies cannot be used with motor vehicle listings.
**/
export class CategoryType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=default" })
  default?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
