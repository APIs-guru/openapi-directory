import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DedicatedIp } from "./dedicatedip";



// GetDedicatedIpsResponse
/** 
 * Information about the dedicated IP addresses that are associated with your Amazon Pinpoint account.
**/
export class GetDedicatedIpsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DedicatedIps", elemType: DedicatedIp })
  dedicatedIps?: DedicatedIp[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
