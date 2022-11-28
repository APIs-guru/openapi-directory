import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbParameterGroupStatus } from "./dbparametergroupstatus";
import { DbSecurityGroupMembership } from "./dbsecuritygroupmembership";
import { DbSubnetGroup } from "./dbsubnetgroup";
import { Endpoint } from "./endpoint";
import { OptionGroupMembership } from "./optiongroupmembership";
import { PendingModifiedValues } from "./pendingmodifiedvalues";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";



export class DbInstance extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocatedStorage?: number;

  @SpeakeasyMetadata()
  autoMinorVersionUpgrade?: boolean;

  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  backupRetentionPeriod?: number;

  @SpeakeasyMetadata()
  characterSetName?: string;

  @SpeakeasyMetadata()
  dbInstanceClass?: string;

  @SpeakeasyMetadata()
  dbInstanceIdentifier?: string;

  @SpeakeasyMetadata()
  dbInstanceStatus?: string;

  @SpeakeasyMetadata()
  dbName?: string;

  @SpeakeasyMetadata({ elemType: DbParameterGroupStatus })
  dbParameterGroups?: DbParameterGroupStatus[];

  @SpeakeasyMetadata({ elemType: DbSecurityGroupMembership })
  dbSecurityGroups?: DbSecurityGroupMembership[];

  @SpeakeasyMetadata()
  dbSubnetGroup?: DbSubnetGroup;

  @SpeakeasyMetadata()
  endpoint?: Endpoint;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  instanceCreateTime?: Date;

  @SpeakeasyMetadata()
  iops?: number;

  @SpeakeasyMetadata()
  latestRestorableTime?: Date;

  @SpeakeasyMetadata()
  licenseModel?: string;

  @SpeakeasyMetadata()
  masterUsername?: string;

  @SpeakeasyMetadata()
  multiAz?: boolean;

  @SpeakeasyMetadata()
  optionGroupMembership?: OptionGroupMembership;

  @SpeakeasyMetadata()
  pendingModifiedValues?: PendingModifiedValues;

  @SpeakeasyMetadata()
  preferredBackupWindow?: string;

  @SpeakeasyMetadata()
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata()
  publiclyAccessible?: boolean;

  @SpeakeasyMetadata()
  readReplicaDbInstanceIdentifiers?: string[];

  @SpeakeasyMetadata()
  readReplicaSourceDbInstanceIdentifier?: string;

  @SpeakeasyMetadata()
  secondaryAvailabilityZone?: string;

  @SpeakeasyMetadata({ elemType: VpcSecurityGroupMembership })
  vpcSecurityGroups?: VpcSecurityGroupMembership[];
}
