import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaFieldSpec } from "./schemafieldspec";
/**
 * The type of API resource. For Schema resources, this is always `admin#directory#schema`.
**/
export declare class Schema extends SpeakeasyBase {
    displayName?: string;
    etag?: string;
    fields?: SchemaFieldSpec[];
    kind?: string;
    schemaId?: string;
    schemaName?: string;
}
