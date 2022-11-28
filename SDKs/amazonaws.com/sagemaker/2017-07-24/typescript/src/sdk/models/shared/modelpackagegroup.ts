import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { ModelPackageGroupStatusEnum } from "./modelpackagegroupstatusenum";
import { Tag } from "./tag";



// ModelPackageGroup
/** 
 * A group of versioned models in the model registry.
**/
export class ModelPackageGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageGroupArn" })
  modelPackageGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageGroupDescription" })
  modelPackageGroupDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageGroupName" })
  modelPackageGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageGroupStatus" })
  modelPackageGroupStatus?: ModelPackageGroupStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
