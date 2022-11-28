import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Displays the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTarget</code>.
**/
export declare class ConnectionPoolConfigurationInfo extends SpeakeasyBase {
    connectionBorrowTimeout?: number;
    initQuery?: string;
    maxConnectionsPercent?: number;
    maxIdleConnectionsPercent?: number;
    sessionPinningFilters?: string[];
}
