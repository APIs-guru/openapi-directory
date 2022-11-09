import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotebookInstanceAcceleratorTypeEnum } from "./notebookinstanceacceleratortypeenum";
import { DirectInternetAccessEnum } from "./directinternetaccessenum";
import { InstanceTypeEnum } from "./instancetypeenum";
import { NotebookInstanceStatusEnum } from "./notebookinstancestatusenum";
import { RootAccessEnum } from "./rootaccessenum";


export class DescribeNotebookInstanceOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceleratorTypes" })
  acceleratorTypes?: NotebookInstanceAcceleratorTypeEnum[];

  @Metadata({ data: "json, name=AdditionalCodeRepositories" })
  additionalCodeRepositories?: string[];

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DefaultCodeRepository" })
  defaultCodeRepository?: string;

  @Metadata({ data: "json, name=DirectInternetAccess" })
  directInternetAccess?: DirectInternetAccessEnum;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=InstanceType" })
  instanceType?: InstanceTypeEnum;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=NetworkInterfaceId" })
  networkInterfaceId?: string;

  @Metadata({ data: "json, name=NotebookInstanceArn" })
  notebookInstanceArn?: string;

  @Metadata({ data: "json, name=NotebookInstanceLifecycleConfigName" })
  notebookInstanceLifecycleConfigName?: string;

  @Metadata({ data: "json, name=NotebookInstanceName" })
  notebookInstanceName?: string;

  @Metadata({ data: "json, name=NotebookInstanceStatus" })
  notebookInstanceStatus?: NotebookInstanceStatusEnum;

  @Metadata({ data: "json, name=PlatformIdentifier" })
  platformIdentifier?: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=RootAccess" })
  rootAccess?: RootAccessEnum;

  @Metadata({ data: "json, name=SecurityGroups" })
  securityGroups?: string[];

  @Metadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @Metadata({ data: "json, name=Url" })
  url?: string;

  @Metadata({ data: "json, name=VolumeSizeInGB" })
  volumeSizeInGb?: number;
}
