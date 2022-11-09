import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NotebookInstanceAcceleratorTypeEnum } from "./notebookinstanceacceleratortypeenum";
import { DirectInternetAccessEnum } from "./directinternetaccessenum";
import { InstanceTypeEnum } from "./instancetypeenum";
import { RootAccessEnum } from "./rootaccessenum";
import { Tag } from "./tag";


export class CreateNotebookInstanceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceleratorTypes" })
  acceleratorTypes?: NotebookInstanceAcceleratorTypeEnum[];

  @Metadata({ data: "json, name=AdditionalCodeRepositories" })
  additionalCodeRepositories?: string[];

  @Metadata({ data: "json, name=DefaultCodeRepository" })
  defaultCodeRepository?: string;

  @Metadata({ data: "json, name=DirectInternetAccess" })
  directInternetAccess?: DirectInternetAccessEnum;

  @Metadata({ data: "json, name=InstanceType" })
  instanceType: InstanceTypeEnum;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=LifecycleConfigName" })
  lifecycleConfigName?: string;

  @Metadata({ data: "json, name=NotebookInstanceName" })
  notebookInstanceName: string;

  @Metadata({ data: "json, name=PlatformIdentifier" })
  platformIdentifier?: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=RootAccess" })
  rootAccess?: RootAccessEnum;

  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=VolumeSizeInGB" })
  volumeSizeInGb?: number;
}
