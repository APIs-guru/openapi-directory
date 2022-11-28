import { SpeakeasyBase } from "../../../internal/utils";
import { AwsRdsDbProcessorFeature } from "./awsrdsdbprocessorfeature";
/**
 * Provides details about an Amazon RDS DB cluster snapshot.
**/
export declare class AwsRdsDbSnapshotDetails extends SpeakeasyBase {
    allocatedStorage?: number;
    availabilityZone?: string;
    dbInstanceIdentifier?: string;
    dbSnapshotIdentifier?: string;
    dbiResourceId?: string;
    encrypted?: boolean;
    engine?: string;
    engineVersion?: string;
    iamDatabaseAuthenticationEnabled?: boolean;
    instanceCreateTime?: string;
    iops?: number;
    kmsKeyId?: string;
    licenseModel?: string;
    masterUsername?: string;
    optionGroupName?: string;
    percentProgress?: number;
    port?: number;
    processorFeatures?: AwsRdsDbProcessorFeature[];
    snapshotCreateTime?: string;
    snapshotType?: string;
    sourceDbSnapshotIdentifier?: string;
    sourceRegion?: string;
    status?: string;
    storageType?: string;
    tdeCredentialArn?: string;
    timezone?: string;
    vpcId?: string;
}
