import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListDedicatedIpPoolsResponse
/** 
 * A list of dedicated IP pools.
**/
export class ListDedicatedIpPoolsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DedicatedIpPools" })
  dedicatedIpPools?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
