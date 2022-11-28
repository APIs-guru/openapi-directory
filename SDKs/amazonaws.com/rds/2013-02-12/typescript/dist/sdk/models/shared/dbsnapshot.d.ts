import { SpeakeasyBase } from "../../../internal/utils";
export declare class DbSnapshot extends SpeakeasyBase {
    allocatedStorage?: number;
    availabilityZone?: string;
    dbInstanceIdentifier?: string;
    dbSnapshotIdentifier?: string;
    engine?: string;
    engineVersion?: string;
    instanceCreateTime?: Date;
    iops?: number;
    licenseModel?: string;
    masterUsername?: string;
    optionGroupName?: string;
    port?: number;
    snapshotCreateTime?: Date;
    snapshotType?: string;
    status?: string;
    vpcId?: string;
}
