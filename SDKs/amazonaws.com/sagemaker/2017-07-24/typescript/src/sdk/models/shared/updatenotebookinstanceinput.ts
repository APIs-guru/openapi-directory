import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotebookInstanceAcceleratorTypeEnum } from "./notebookinstanceacceleratortypeenum";
import { InstanceTypeEnum } from "./instancetypeenum";
import { RootAccessEnum } from "./rootaccessenum";



export class UpdateNotebookInstanceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceleratorTypes" })
  acceleratorTypes?: NotebookInstanceAcceleratorTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=AdditionalCodeRepositories" })
  additionalCodeRepositories?: string[];

  @SpeakeasyMetadata({ data: "json, name=DefaultCodeRepository" })
  defaultCodeRepository?: string;

  @SpeakeasyMetadata({ data: "json, name=DisassociateAcceleratorTypes" })
  disassociateAcceleratorTypes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DisassociateAdditionalCodeRepositories" })
  disassociateAdditionalCodeRepositories?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DisassociateDefaultCodeRepository" })
  disassociateDefaultCodeRepository?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DisassociateLifecycleConfig" })
  disassociateLifecycleConfig?: boolean;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType?: InstanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LifecycleConfigName" })
  lifecycleConfigName?: string;

  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceName" })
  notebookInstanceName: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RootAccess" })
  rootAccess?: RootAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=VolumeSizeInGB" })
  volumeSizeInGb?: number;
}
