import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";
import { AvailableProcessorFeature } from "./availableprocessorfeature";



// OrderableDbInstanceOption
/** 
 * <p>Contains a list of available options for a DB instance.</p> <p> This data type is used as a response element in the <code>DescribeOrderableDBInstanceOptions</code> action. </p>
**/
export class OrderableDbInstanceOption extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZoneGroup?: string;

  @SpeakeasyMetadata({ elemType: AvailabilityZone })
  availabilityZones?: AvailabilityZone[];

  @SpeakeasyMetadata({ elemType: AvailableProcessorFeature })
  availableProcessorFeatures?: AvailableProcessorFeature[];

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
  outpostCapable?: boolean;

  @SpeakeasyMetadata()
  readReplicaCapable?: boolean;

  @SpeakeasyMetadata()
  storageType?: string;

  @SpeakeasyMetadata()
  supportedActivityStreamModes?: string[];

  @SpeakeasyMetadata()
  supportedEngineModes?: string[];

  @SpeakeasyMetadata()
  supportsEnhancedMonitoring?: boolean;

  @SpeakeasyMetadata()
  supportsGlobalDatabases?: boolean;

  @SpeakeasyMetadata()
  supportsIamDatabaseAuthentication?: boolean;

  @SpeakeasyMetadata()
  supportsIops?: boolean;

  @SpeakeasyMetadata()
  supportsKerberosAuthentication?: boolean;

  @SpeakeasyMetadata()
  supportsPerformanceInsights?: boolean;

  @SpeakeasyMetadata()
  supportsStorageAutoscaling?: boolean;

  @SpeakeasyMetadata()
  supportsStorageEncryption?: boolean;

  @SpeakeasyMetadata()
  vpc?: boolean;
}
