import { SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { ModelPackageGroupStatusEnum } from "./modelpackagegroupstatusenum";
import { Tag } from "./tag";
/**
 * A group of versioned models in the model registry.
**/
export declare class ModelPackageGroup extends SpeakeasyBase {
    createdBy?: UserContext;
    creationTime?: Date;
    modelPackageGroupArn?: string;
    modelPackageGroupDescription?: string;
    modelPackageGroupName?: string;
    modelPackageGroupStatus?: ModelPackageGroupStatusEnum;
    tags?: Tag[];
}
