import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegionalPriceMigrationConfig } from "./regionalpricemigrationconfig";
import { RegionsVersion } from "./regionsversion";


// MigrateBasePlanPricesRequest
/** 
 * Request message for MigrateBasePlanPrices.
**/
export class MigrateBasePlanPricesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=regionalPriceMigrations", elemType: shared.RegionalPriceMigrationConfig })
  regionalPriceMigrations?: RegionalPriceMigrationConfig[];

  @Metadata({ data: "json, name=regionsVersion" })
  regionsVersion?: RegionsVersion;
}
