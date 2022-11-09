import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1DeveloperBalanceWallet } from "./googlecloudapigeev1developerbalancewallet";


// GoogleCloudApigeeV1DeveloperBalance
/** 
 * Account balance for the developer.
**/
export class GoogleCloudApigeeV1DeveloperBalance extends SpeakeasyBase {
  @Metadata({ data: "json, name=wallets", elemType: shared.GoogleCloudApigeeV1DeveloperBalanceWallet })
  wallets?: GoogleCloudApigeeV1DeveloperBalanceWallet[];
}
