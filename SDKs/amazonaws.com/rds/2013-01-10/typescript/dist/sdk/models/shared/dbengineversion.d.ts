import { SpeakeasyBase } from "../../../internal/utils";
import { CharacterSet } from "./characterset";
export declare class DbEngineVersion extends SpeakeasyBase {
    dbEngineDescription?: string;
    dbEngineVersionDescription?: string;
    dbParameterGroupFamily?: string;
    defaultCharacterSet?: CharacterSet;
    engine?: string;
    engineVersion?: string;
    supportedCharacterSets?: CharacterSet[];
}
