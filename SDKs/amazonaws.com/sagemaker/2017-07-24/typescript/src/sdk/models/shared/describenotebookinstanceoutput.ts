import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotebookInstanceAcceleratorTypeEnum } from "./notebookinstanceacceleratortypeenum";
import { DirectInternetAccessEnum } from "./directinternetaccessenum";
import { InstanceTypeEnum } from "./instancetypeenum";
import { NotebookInstanceStatusEnum } from "./notebookinstancestatusenum";
import { RootAccessEnum } from "./rootaccessenum";



export class DescribeNotebookInstanceOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceleratorTypes" })
  acceleratorTypes?: NotebookInstanceAcceleratorTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=AdditionalCodeRepositories" })
  additionalCodeRepositories?: string[];

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DefaultCodeRepository" })
  defaultCodeRepository?: string;

  @SpeakeasyMetadata({ data: "json, name=DirectInternetAccess" })
  directInternetAccess?: DirectInternetAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType?: InstanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=NetworkInterfaceId" })
  networkInterfaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceArn" })
  notebookInstanceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceLifecycleConfigName" })
  notebookInstanceLifecycleConfigName?: string;

  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceName" })
  notebookInstanceName?: string;

  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceStatus" })
  notebookInstanceStatus?: NotebookInstanceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=PlatformIdentifier" })
  platformIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RootAccess" })
  rootAccess?: RootAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroups" })
  securityGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=VolumeSizeInGB" })
  volumeSizeInGb?: number;
}
