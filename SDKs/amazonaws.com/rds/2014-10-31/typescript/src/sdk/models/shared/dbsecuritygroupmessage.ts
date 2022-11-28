import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSecurityGroup } from "./dbsecuritygroup";



// DbSecurityGroupMessage
/** 
 *  Contains the result of a successful invocation of the <code>DescribeDBSecurityGroups</code> action. 
**/
export class DbSecurityGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbSecurityGroup })
  dbSecurityGroups?: DbSecurityGroup[];

  @SpeakeasyMetadata()
  marker?: string;
}
