import { SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabasePasswordVersionEnum } from "./relationaldatabasepasswordversionenum";
export declare class GetRelationalDatabaseMasterUserPasswordRequest extends SpeakeasyBase {
    passwordVersion?: RelationalDatabasePasswordVersionEnum;
    relationalDatabaseName: string;
}
