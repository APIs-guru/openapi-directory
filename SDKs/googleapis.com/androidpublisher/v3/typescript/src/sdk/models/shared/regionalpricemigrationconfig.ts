import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegionalPriceMigrationConfig
/** 
 * Configuration for a price migration.
**/
export class RegionalPriceMigrationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=oldestAllowedPriceVersionTime" })
  oldestAllowedPriceVersionTime?: string;

  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
