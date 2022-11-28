import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectionPoolConfigurationInfo
/** 
 * Displays the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTarget</code>.
**/
export class ConnectionPoolConfigurationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connectionBorrowTimeout?: number;

  @SpeakeasyMetadata()
  initQuery?: string;

  @SpeakeasyMetadata()
  maxConnectionsPercent?: number;

  @SpeakeasyMetadata()
  maxIdleConnectionsPercent?: number;

  @SpeakeasyMetadata()
  sessionPinningFilters?: string[];
}
