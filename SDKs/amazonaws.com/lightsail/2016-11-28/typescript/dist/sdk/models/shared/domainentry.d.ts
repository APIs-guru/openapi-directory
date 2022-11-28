import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a domain recordset entry.
**/
export declare class DomainEntry extends SpeakeasyBase {
    id?: string;
    isAlias?: boolean;
    name?: string;
    options?: Map<string, string>;
    target?: string;
    type?: string;
}
