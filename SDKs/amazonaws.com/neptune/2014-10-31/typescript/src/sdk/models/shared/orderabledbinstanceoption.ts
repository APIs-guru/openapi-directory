import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";



// OrderableDbInstanceOption
/** 
 * <p>Contains a list of available options for a DB instance.</p> <p> This data type is used as a response element in the <a>DescribeOrderableDBInstanceOptions</a> action.</p>
**/
export class OrderableDbInstanceOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AvailabilityZone })
  availabilityZones?: AvailabilityZone[];

  @SpeakeasyMetadata()
  dbInstanceClass?: string;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  licenseModel?: string;

  @SpeakeasyMetadata()
  maxIopsPerDbInstance?: number;

  @SpeakeasyMetadata()
  maxIopsPerGib?: number;

  @SpeakeasyMetadata()
  maxStorageSize?: number;

  @SpeakeasyMetadata()
  minIopsPerDbInstance?: number;

  @SpeakeasyMetadata()
  minIopsPerGib?: number;

  @SpeakeasyMetadata()
  minStorageSize?: number;

  @SpeakeasyMetadata()
  multiAzCapable?: boolean;

  @SpeakeasyMetadata()
  readReplicaCapable?: boolean;

  @SpeakeasyMetadata()
  storageType?: string;

  @SpeakeasyMetadata()
  supportsEnhancedMonitoring?: boolean;

  @SpeakeasyMetadata()
  supportsIamDatabaseAuthentication?: boolean;

  @SpeakeasyMetadata()
  supportsIops?: boolean;

  @SpeakeasyMetadata()
  supportsPerformanceInsights?: boolean;

  @SpeakeasyMetadata()
  supportsStorageEncryption?: boolean;

  @SpeakeasyMetadata()
  vpc?: boolean;
}
