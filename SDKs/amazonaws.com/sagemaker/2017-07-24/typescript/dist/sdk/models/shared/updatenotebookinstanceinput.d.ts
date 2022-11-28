import { SpeakeasyBase } from "../../../internal/utils";
import { NotebookInstanceAcceleratorTypeEnum } from "./notebookinstanceacceleratortypeenum";
import { InstanceTypeEnum } from "./instancetypeenum";
import { RootAccessEnum } from "./rootaccessenum";
export declare class UpdateNotebookInstanceInput extends SpeakeasyBase {
    acceleratorTypes?: NotebookInstanceAcceleratorTypeEnum[];
    additionalCodeRepositories?: string[];
    defaultCodeRepository?: string;
    disassociateAcceleratorTypes?: boolean;
    disassociateAdditionalCodeRepositories?: boolean;
    disassociateDefaultCodeRepository?: boolean;
    disassociateLifecycleConfig?: boolean;
    instanceType?: InstanceTypeEnum;
    lifecycleConfigName?: string;
    notebookInstanceName: string;
    roleArn?: string;
    rootAccess?: RootAccessEnum;
    volumeSizeInGb?: number;
}
