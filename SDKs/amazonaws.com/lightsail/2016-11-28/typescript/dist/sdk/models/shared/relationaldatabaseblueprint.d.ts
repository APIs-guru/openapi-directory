import { SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabaseEngineEnum } from "./relationaldatabaseengineenum";
/**
 * Describes a database image, or blueprint. A blueprint describes the major engine version of a database.
**/
export declare class RelationalDatabaseBlueprint extends SpeakeasyBase {
    blueprintId?: string;
    engine?: RelationalDatabaseEngineEnum;
    engineDescription?: string;
    engineVersion?: string;
    engineVersionDescription?: string;
    isEngineDefault?: boolean;
}
