import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret } from "./googleanalyticsadminv1alphameasurementprotocolsecret";



// GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse
/** 
 * Response message for ListMeasurementProtocolSecret RPC
**/
export class GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=measurementProtocolSecrets", elemType: GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret })
  measurementProtocolSecrets?: GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
