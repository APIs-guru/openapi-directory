import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserContext } from "./usercontext";
import { ModelPackageGroupStatusEnum } from "./modelpackagegroupstatusenum";


export class DescribeModelPackageGroupOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedBy" })
  createdBy: UserContext;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=ModelPackageGroupArn" })
  modelPackageGroupArn: string;

  @Metadata({ data: "json, name=ModelPackageGroupDescription" })
  modelPackageGroupDescription?: string;

  @Metadata({ data: "json, name=ModelPackageGroupName" })
  modelPackageGroupName: string;

  @Metadata({ data: "json, name=ModelPackageGroupStatus" })
  modelPackageGroupStatus: ModelPackageGroupStatusEnum;
}
