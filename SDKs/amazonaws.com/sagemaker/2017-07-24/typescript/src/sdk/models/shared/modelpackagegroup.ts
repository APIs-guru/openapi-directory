import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserContext } from "./usercontext";
import { ModelPackageGroupStatusEnum } from "./modelpackagegroupstatusenum";
import { Tag } from "./tag";


// ModelPackageGroup
/** 
 * A group of versioned models in the model registry.
**/
export class ModelPackageGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=ModelPackageGroupArn" })
  modelPackageGroupArn?: string;

  @Metadata({ data: "json, name=ModelPackageGroupDescription" })
  modelPackageGroupDescription?: string;

  @Metadata({ data: "json, name=ModelPackageGroupName" })
  modelPackageGroupName?: string;

  @Metadata({ data: "json, name=ModelPackageGroupStatus" })
  modelPackageGroupStatus?: ModelPackageGroupStatusEnum;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
