import { SpeakeasyBase } from "../../../internal/utils";
import { RegionalPriceMigrationConfig } from "./regionalpricemigrationconfig";
import { RegionsVersion } from "./regionsversion";
/**
 * Request message for MigrateBasePlanPrices.
**/
export declare class MigrateBasePlanPricesRequest extends SpeakeasyBase {
    regionalPriceMigrations?: RegionalPriceMigrationConfig[];
    regionsVersion?: RegionsVersion;
}
