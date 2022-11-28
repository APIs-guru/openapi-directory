import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSubnetGroup } from "./dbsubnetgroup";



// DbSubnetGroupMessage
/** 
 *  Contains the result of a successful invocation of the <code>DescribeDBSubnetGroups</code> action. 
**/
export class DbSubnetGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbSubnetGroup })
  dbSubnetGroups?: DbSubnetGroup[];

  @SpeakeasyMetadata()
  marker?: string;
}
