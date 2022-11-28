import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1DeveloperBalanceWallet } from "./googlecloudapigeev1developerbalancewallet";



// GoogleCloudApigeeV1DeveloperBalance
/** 
 * Account balance for the developer.
**/
export class GoogleCloudApigeeV1DeveloperBalance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=wallets", elemType: GoogleCloudApigeeV1DeveloperBalanceWallet })
  wallets?: GoogleCloudApigeeV1DeveloperBalanceWallet[];
}
