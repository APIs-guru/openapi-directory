import { SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { ModelPackageGroupStatusEnum } from "./modelpackagegroupstatusenum";
export declare class DescribeModelPackageGroupOutput extends SpeakeasyBase {
    createdBy: UserContext;
    creationTime: Date;
    modelPackageGroupArn: string;
    modelPackageGroupDescription?: string;
    modelPackageGroupName: string;
    modelPackageGroupStatus: ModelPackageGroupStatusEnum;
}
