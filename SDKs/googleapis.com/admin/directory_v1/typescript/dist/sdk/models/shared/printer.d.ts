import { SpeakeasyBase } from "../../../internal/utils";
import { AuxiliaryMessage } from "./auxiliarymessage";
/**
 * Printer configuration.
**/
export declare class PrinterInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    id?: string;
    makeAndModel?: string;
    name?: string;
    orgUnitId?: string;
    uri?: string;
    useDriverlessConfig?: boolean;
}
/**
 * Printer configuration.
**/
export declare class Printer extends SpeakeasyBase {
    auxiliaryMessages?: AuxiliaryMessage[];
    createTime?: string;
    description?: string;
    displayName?: string;
    id?: string;
    makeAndModel?: string;
    name?: string;
    orgUnitId?: string;
    uri?: string;
    useDriverlessConfig?: boolean;
}
