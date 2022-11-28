import { SpeakeasyBase } from "../../../internal/utils";
import { NotebookInstanceAcceleratorTypeEnum } from "./notebookinstanceacceleratortypeenum";
import { DirectInternetAccessEnum } from "./directinternetaccessenum";
import { InstanceTypeEnum } from "./instancetypeenum";
import { NotebookInstanceStatusEnum } from "./notebookinstancestatusenum";
import { RootAccessEnum } from "./rootaccessenum";
export declare class DescribeNotebookInstanceOutput extends SpeakeasyBase {
    acceleratorTypes?: NotebookInstanceAcceleratorTypeEnum[];
    additionalCodeRepositories?: string[];
    creationTime?: Date;
    defaultCodeRepository?: string;
    directInternetAccess?: DirectInternetAccessEnum;
    failureReason?: string;
    instanceType?: InstanceTypeEnum;
    kmsKeyId?: string;
    lastModifiedTime?: Date;
    networkInterfaceId?: string;
    notebookInstanceArn?: string;
    notebookInstanceLifecycleConfigName?: string;
    notebookInstanceName?: string;
    notebookInstanceStatus?: NotebookInstanceStatusEnum;
    platformIdentifier?: string;
    roleArn?: string;
    rootAccess?: RootAccessEnum;
    securityGroups?: string[];
    subnetId?: string;
    url?: string;
    volumeSizeInGb?: number;
}
