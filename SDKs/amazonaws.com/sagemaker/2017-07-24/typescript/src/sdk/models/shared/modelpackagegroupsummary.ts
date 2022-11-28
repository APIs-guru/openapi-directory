import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModelPackageGroupStatusEnum } from "./modelpackagegroupstatusenum";



// ModelPackageGroupSummary
/** 
 * Summary information about a model group.
**/
export class ModelPackageGroupSummary extends SpeakeasyBase {
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
