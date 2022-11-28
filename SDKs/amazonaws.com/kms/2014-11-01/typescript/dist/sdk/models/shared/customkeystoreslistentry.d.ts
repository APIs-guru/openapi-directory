import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionErrorCodeTypeEnum } from "./connectionerrorcodetypeenum";
import { ConnectionStateTypeEnum } from "./connectionstatetypeenum";
/**
 * Contains information about each custom key store in the custom key store list.
**/
export declare class CustomKeyStoresListEntry extends SpeakeasyBase {
    cloudHsmClusterId?: string;
    connectionErrorCode?: ConnectionErrorCodeTypeEnum;
    connectionState?: ConnectionStateTypeEnum;
    creationDate?: Date;
    customKeyStoreId?: string;
    customKeyStoreName?: string;
    trustAnchorCertificate?: string;
}
