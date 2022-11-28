import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegionalPriceMigrationConfig } from "./regionalpricemigrationconfig";
import { RegionsVersion } from "./regionsversion";



// MigrateBasePlanPricesRequest
/** 
 * Request message for MigrateBasePlanPrices.
**/
export class MigrateBasePlanPricesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regionalPriceMigrations", elemType: RegionalPriceMigrationConfig })
  regionalPriceMigrations?: RegionalPriceMigrationConfig[];

  @SpeakeasyMetadata({ data: "json, name=regionsVersion" })
  regionsVersion?: RegionsVersion;
}
