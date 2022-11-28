import { SpeakeasyBase } from "../../../internal/utils";
import { Token } from "./token";
/**
 * JSON response template for List tokens operation in Directory API.
**/
export declare class Tokens extends SpeakeasyBase {
    etag?: string;
    items?: Token[];
    kind?: string;
}
