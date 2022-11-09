import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ModelPackageGroupStatusEnum } from "./modelpackagegroupstatusenum";


// ModelPackageGroupSummary
/** 
 * Summary information about a model group.
**/
export class ModelPackageGroupSummary extends SpeakeasyBase {
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
