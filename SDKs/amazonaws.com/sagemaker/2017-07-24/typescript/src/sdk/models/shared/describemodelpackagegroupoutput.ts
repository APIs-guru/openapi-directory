import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { ModelPackageGroupStatusEnum } from "./modelpackagegroupstatusenum";



export class DescribeModelPackageGroupOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedBy" })
  createdBy: UserContext;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageGroupArn" })
  modelPackageGroupArn: string;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageGroupDescription" })
  modelPackageGroupDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageGroupName" })
  modelPackageGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageGroupStatus" })
  modelPackageGroupStatus: ModelPackageGroupStatusEnum;
}
