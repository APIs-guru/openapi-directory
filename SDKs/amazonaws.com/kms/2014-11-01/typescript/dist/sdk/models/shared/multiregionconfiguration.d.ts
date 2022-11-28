import { SpeakeasyBase } from "../../../internal/utils";
import { MultiRegionKeyTypeEnum } from "./multiregionkeytypeenum";
import { MultiRegionKey } from "./multiregionkey";
/**
 * <p>Describes the configuration of this multi-Region key. This field appears only when the KMS key is a primary or replica of a multi-Region key.</p> <p>For more information about any listed KMS key, use the <a>DescribeKey</a> operation.</p>
**/
export declare class MultiRegionConfiguration extends SpeakeasyBase {
    multiRegionKeyType?: MultiRegionKeyTypeEnum;
    primaryKey?: MultiRegionKey;
    replicaKeys?: MultiRegionKey[];
}
