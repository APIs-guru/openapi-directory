import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the parameters of a database.
**/
export declare class RelationalDatabaseParameter extends SpeakeasyBase {
    allowedValues?: string;
    applyMethod?: string;
    applyType?: string;
    dataType?: string;
    description?: string;
    isModifiable?: boolean;
    parameterName?: string;
    parameterValue?: string;
}
