import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MultiRegionKeyTypeEnum } from "./multiregionkeytypeenum";
import { MultiRegionKey } from "./multiregionkey";
import { MultiRegionKey } from "./multiregionkey";


// MultiRegionConfiguration
/** 
 * <p>Describes the configuration of this multi-Region key. This field appears only when the KMS key is a primary or replica of a multi-Region key.</p> <p>For more information about any listed KMS key, use the <a>DescribeKey</a> operation.</p>
**/
export class MultiRegionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=MultiRegionKeyType" })
  multiRegionKeyType?: MultiRegionKeyTypeEnum;

  @Metadata({ data: "json, name=PrimaryKey" })
  primaryKey?: MultiRegionKey;

  @Metadata({ data: "json, name=ReplicaKeys", elemType: shared.MultiRegionKey })
  replicaKeys?: MultiRegionKey[];
}
