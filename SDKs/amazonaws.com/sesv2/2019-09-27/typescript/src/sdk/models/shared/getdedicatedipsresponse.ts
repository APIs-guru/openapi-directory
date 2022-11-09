import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DedicatedIp } from "./dedicatedip";


// GetDedicatedIpsResponse
/** 
 * Information about the dedicated IP addresses that are associated with your AWS account.
**/
export class GetDedicatedIpsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DedicatedIps", elemType: shared.DedicatedIp })
  dedicatedIps?: DedicatedIp[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
