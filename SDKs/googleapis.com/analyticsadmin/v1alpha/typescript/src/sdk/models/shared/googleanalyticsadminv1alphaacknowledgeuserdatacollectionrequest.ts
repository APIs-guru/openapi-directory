import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionRequest
/** 
 * Request message for AcknowledgeUserDataCollection RPC.
**/
export class GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledgement" })
  acknowledgement?: string;
}
