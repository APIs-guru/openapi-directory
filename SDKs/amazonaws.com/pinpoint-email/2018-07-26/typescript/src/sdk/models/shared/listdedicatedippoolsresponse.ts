import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListDedicatedIpPoolsResponse
/** 
 * A list of dedicated IP pools.
**/
export class ListDedicatedIpPoolsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DedicatedIpPools" })
  dedicatedIpPools?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
