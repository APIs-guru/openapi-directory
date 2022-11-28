import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";
import { AvailableProcessorFeature } from "./availableprocessorfeature";
/**
 * <p>Contains a list of available options for a DB instance.</p> <p> This data type is used as a response element in the <code>DescribeOrderableDBInstanceOptions</code> action. </p>
**/
export declare class OrderableDbInstanceOption extends SpeakeasyBase {
    availabilityZoneGroup?: string;
    availabilityZones?: AvailabilityZone[];
    availableProcessorFeatures?: AvailableProcessorFeature[];
    dbInstanceClass?: string;
    engine?: string;
    engineVersion?: string;
    licenseModel?: string;
    maxIopsPerDbInstance?: number;
    maxIopsPerGib?: number;
    maxStorageSize?: number;
    minIopsPerDbInstance?: number;
    minIopsPerGib?: number;
    minStorageSize?: number;
    multiAzCapable?: boolean;
    outpostCapable?: boolean;
    readReplicaCapable?: boolean;
    storageType?: string;
    supportedActivityStreamModes?: string[];
    supportedEngineModes?: string[];
    supportsEnhancedMonitoring?: boolean;
    supportsGlobalDatabases?: boolean;
    supportsIamDatabaseAuthentication?: boolean;
    supportsIops?: boolean;
    supportsKerberosAuthentication?: boolean;
    supportsPerformanceInsights?: boolean;
    supportsStorageAutoscaling?: boolean;
    supportsStorageEncryption?: boolean;
    vpc?: boolean;
}
