import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbInstance } from "./dbinstance";



// DbInstanceMessage
/** 
 *  Contains the result of a successful invocation of the <code>DescribeDBInstances</code> action. 
**/
export class DbInstanceMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbInstance })
  dbInstances?: DbInstance[];

  @SpeakeasyMetadata()
  marker?: string;
}
