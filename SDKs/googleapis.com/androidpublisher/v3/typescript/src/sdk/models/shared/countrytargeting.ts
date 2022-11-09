import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CountryTargeting
/** 
 * Country targeting specification.
**/
export class CountryTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=countries" })
  countries?: string[];

  @Metadata({ data: "json, name=includeRestOfWorld" })
  includeRestOfWorld?: boolean;
}
