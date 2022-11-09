import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret } from "./googleanalyticsadminv1alphameasurementprotocolsecret";


// GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse
/** 
 * Response message for ListMeasurementProtocolSecret RPC
**/
export class GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=measurementProtocolSecrets", elemType: shared.GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret })
  measurementProtocolSecrets?: GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
