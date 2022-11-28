import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MultiRegionKeyTypeEnum } from "./multiregionkeytypeenum";
import { MultiRegionKey } from "./multiregionkey";



// MultiRegionConfiguration
/** 
 * <p>Describes the configuration of this multi-Region key. This field appears only when the KMS key is a primary or replica of a multi-Region key.</p> <p>For more information about any listed KMS key, use the <a>DescribeKey</a> operation.</p>
**/
export class MultiRegionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MultiRegionKeyType" })
  multiRegionKeyType?: MultiRegionKeyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=PrimaryKey" })
  primaryKey?: MultiRegionKey;

  @SpeakeasyMetadata({ data: "json, name=ReplicaKeys", elemType: MultiRegionKey })
  replicaKeys?: MultiRegionKey[];
}
