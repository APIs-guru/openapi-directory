import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbEngineVersion } from "./dbengineversion";



// DbEngineVersionMessage
/** 
 *  Contains the result of a successful invocation of the <code>DescribeDBEngineVersions</code> action. 
**/
export class DbEngineVersionMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbEngineVersion })
  dbEngineVersions?: DbEngineVersion[];

  @SpeakeasyMetadata()
  marker?: string;
}
