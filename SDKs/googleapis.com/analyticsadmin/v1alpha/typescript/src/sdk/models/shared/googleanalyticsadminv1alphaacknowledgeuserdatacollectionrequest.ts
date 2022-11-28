import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionRequest
/** 
 * Request message for AcknowledgeUserDataCollection RPC.
**/
export class GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acknowledgement" })
  acknowledgement?: string;
}
