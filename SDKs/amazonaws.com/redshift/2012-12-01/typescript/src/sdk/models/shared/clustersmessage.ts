import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";



// ClustersMessage
/** 
 * Contains the output from the <a>DescribeClusters</a> action. 
**/
export class ClustersMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Cluster })
  clusters?: Cluster[];

  @SpeakeasyMetadata()
  marker?: string;
}
