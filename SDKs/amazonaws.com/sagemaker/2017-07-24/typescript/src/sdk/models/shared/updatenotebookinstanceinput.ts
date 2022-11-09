import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotebookInstanceAcceleratorTypeEnum } from "./notebookinstanceacceleratortypeenum";
import { InstanceTypeEnum } from "./instancetypeenum";
import { RootAccessEnum } from "./rootaccessenum";


export class UpdateNotebookInstanceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceleratorTypes" })
  acceleratorTypes?: NotebookInstanceAcceleratorTypeEnum[];

  @Metadata({ data: "json, name=AdditionalCodeRepositories" })
  additionalCodeRepositories?: string[];

  @Metadata({ data: "json, name=DefaultCodeRepository" })
  defaultCodeRepository?: string;

  @Metadata({ data: "json, name=DisassociateAcceleratorTypes" })
  disassociateAcceleratorTypes?: boolean;

  @Metadata({ data: "json, name=DisassociateAdditionalCodeRepositories" })
  disassociateAdditionalCodeRepositories?: boolean;

  @Metadata({ data: "json, name=DisassociateDefaultCodeRepository" })
  disassociateDefaultCodeRepository?: boolean;

  @Metadata({ data: "json, name=DisassociateLifecycleConfig" })
  disassociateLifecycleConfig?: boolean;

  @Metadata({ data: "json, name=InstanceType" })
  instanceType?: InstanceTypeEnum;

  @Metadata({ data: "json, name=LifecycleConfigName" })
  lifecycleConfigName?: string;

  @Metadata({ data: "json, name=NotebookInstanceName" })
  notebookInstanceName: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=RootAccess" })
  rootAccess?: RootAccessEnum;

  @Metadata({ data: "json, name=VolumeSizeInGB" })
  volumeSizeInGb?: number;
}
