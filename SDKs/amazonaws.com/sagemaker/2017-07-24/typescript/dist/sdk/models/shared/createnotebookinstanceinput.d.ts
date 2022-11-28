import { SpeakeasyBase } from "../../../internal/utils";
import { NotebookInstanceAcceleratorTypeEnum } from "./notebookinstanceacceleratortypeenum";
import { DirectInternetAccessEnum } from "./directinternetaccessenum";
import { InstanceTypeEnum } from "./instancetypeenum";
import { RootAccessEnum } from "./rootaccessenum";
import { Tag } from "./tag";
export declare class CreateNotebookInstanceInput extends SpeakeasyBase {
    acceleratorTypes?: NotebookInstanceAcceleratorTypeEnum[];
    additionalCodeRepositories?: string[];
    defaultCodeRepository?: string;
    directInternetAccess?: DirectInternetAccessEnum;
    instanceType: InstanceTypeEnum;
    kmsKeyId?: string;
    lifecycleConfigName?: string;
    notebookInstanceName: string;
    platformIdentifier?: string;
    roleArn: string;
    rootAccess?: RootAccessEnum;
    securityGroupIds?: string[];
    subnetId?: string;
    tags?: Tag[];
    volumeSizeInGb?: number;
}
