import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON template for token resource in Directory API.
**/
export declare class Token extends SpeakeasyBase {
    anonymous?: boolean;
    clientId?: string;
    displayText?: string;
    etag?: string;
    kind?: string;
    nativeApp?: boolean;
    scopes?: string[];
    userKey?: string;
}
