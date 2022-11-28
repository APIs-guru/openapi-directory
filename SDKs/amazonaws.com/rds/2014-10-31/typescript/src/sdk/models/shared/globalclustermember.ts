import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WriteForwardingStatusEnum } from "./writeforwardingstatusenum";



// GlobalClusterMember
/** 
 *  A data structure with information about any primary and secondary clusters associated with an Aurora global database. 
**/
export class GlobalClusterMember extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbClusterArn?: string;

  @SpeakeasyMetadata()
  globalWriteForwardingStatus?: WriteForwardingStatusEnum;

  @SpeakeasyMetadata()
  isWriter?: boolean;

  @SpeakeasyMetadata()
  readers?: string[];
}
