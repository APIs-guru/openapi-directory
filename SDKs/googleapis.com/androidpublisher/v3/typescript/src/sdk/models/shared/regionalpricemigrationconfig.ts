import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegionalPriceMigrationConfig
/** 
 * Configuration for a price migration.
**/
export class RegionalPriceMigrationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=oldestAllowedPriceVersionTime" })
  oldestAllowedPriceVersionTime?: string;

  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
