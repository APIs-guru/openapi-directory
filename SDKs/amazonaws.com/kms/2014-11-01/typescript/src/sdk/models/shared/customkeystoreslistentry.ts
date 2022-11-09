import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionErrorCodeTypeEnum } from "./connectionerrorcodetypeenum";
import { ConnectionStateTypeEnum } from "./connectionstatetypeenum";


// CustomKeyStoresListEntry
/** 
 * Contains information about each custom key store in the custom key store list.
**/
export class CustomKeyStoresListEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudHsmClusterId" })
  cloudHsmClusterId?: string;

  @Metadata({ data: "json, name=ConnectionErrorCode" })
  connectionErrorCode?: ConnectionErrorCodeTypeEnum;

  @Metadata({ data: "json, name=ConnectionState" })
  connectionState?: ConnectionStateTypeEnum;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=CustomKeyStoreId" })
  customKeyStoreId?: string;

  @Metadata({ data: "json, name=CustomKeyStoreName" })
  customKeyStoreName?: string;

  @Metadata({ data: "json, name=TrustAnchorCertificate" })
  trustAnchorCertificate?: string;
}
