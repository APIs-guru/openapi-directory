import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionErrorCodeTypeEnum } from "./connectionerrorcodetypeenum";
import { ConnectionStateTypeEnum } from "./connectionstatetypeenum";



// CustomKeyStoresListEntry
/** 
 * Contains information about each custom key store in the custom key store list.
**/
export class CustomKeyStoresListEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudHsmClusterId" })
  cloudHsmClusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=ConnectionErrorCode" })
  connectionErrorCode?: ConnectionErrorCodeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ConnectionState" })
  connectionState?: ConnectionStateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=CustomKeyStoreId" })
  customKeyStoreId?: string;

  @SpeakeasyMetadata({ data: "json, name=CustomKeyStoreName" })
  customKeyStoreName?: string;

  @SpeakeasyMetadata({ data: "json, name=TrustAnchorCertificate" })
  trustAnchorCertificate?: string;
}
