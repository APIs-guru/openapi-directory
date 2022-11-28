import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CountryTargeting
/** 
 * Country targeting specification.
**/
export class CountryTargeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countries" })
  countries?: string[];

  @SpeakeasyMetadata({ data: "json, name=includeRestOfWorld" })
  includeRestOfWorld?: boolean;
}
