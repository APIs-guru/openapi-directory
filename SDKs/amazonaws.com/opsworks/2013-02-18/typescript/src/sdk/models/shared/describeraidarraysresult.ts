import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RaidArray } from "./raidarray";


// DescribeRaidArraysResult
/** 
 * Contains the response to a <code>DescribeRaidArrays</code> request.
**/
export class DescribeRaidArraysResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=RaidArrays", elemType: shared.RaidArray })
  raidArrays?: RaidArray[];
}
