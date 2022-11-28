import { SpeakeasyBase } from "../../../internal/utils";
import { Schema } from "./schema";
/**
 * JSON response template for List Schema operation in Directory API.
**/
export declare class Schemas extends SpeakeasyBase {
    etag?: string;
    kind?: string;
    schemas?: Schema[];
}
