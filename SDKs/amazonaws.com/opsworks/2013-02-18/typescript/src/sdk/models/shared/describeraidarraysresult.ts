import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RaidArray } from "./raidarray";



// DescribeRaidArraysResult
/** 
 * Contains the response to a <code>DescribeRaidArrays</code> request.
**/
export class DescribeRaidArraysResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RaidArrays", elemType: RaidArray })
  raidArrays?: RaidArray[];
}
