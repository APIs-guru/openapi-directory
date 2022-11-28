import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret } from "./googleanalyticsadminv1alphameasurementprotocolsecret";
/**
 * Response message for ListMeasurementProtocolSecret RPC
**/
export declare class GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse extends SpeakeasyBase {
    measurementProtocolSecrets?: GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret[];
    nextPageToken?: string;
}
