import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotebookInstanceAcceleratorTypeEnum } from "./notebookinstanceacceleratortypeenum";
import { DirectInternetAccessEnum } from "./directinternetaccessenum";
import { InstanceTypeEnum } from "./instancetypeenum";
import { RootAccessEnum } from "./rootaccessenum";
import { Tag } from "./tag";



export class CreateNotebookInstanceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceleratorTypes" })
  acceleratorTypes?: NotebookInstanceAcceleratorTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=AdditionalCodeRepositories" })
  additionalCodeRepositories?: string[];

  @SpeakeasyMetadata({ data: "json, name=DefaultCodeRepository" })
  defaultCodeRepository?: string;

  @SpeakeasyMetadata({ data: "json, name=DirectInternetAccess" })
  directInternetAccess?: DirectInternetAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType: InstanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=LifecycleConfigName" })
  lifecycleConfigName?: string;

  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceName" })
  notebookInstanceName: string;

  @SpeakeasyMetadata({ data: "json, name=PlatformIdentifier" })
  platformIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=RootAccess" })
  rootAccess?: RootAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=VolumeSizeInGB" })
  volumeSizeInGb?: number;
}
