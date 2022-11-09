import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DetailedModelPackageStatusEnum } from "./detailedmodelpackagestatusenum";


// ModelPackageStatusItem
/** 
 * Represents the overall status of a model package.
**/
export class ModelPackageStatusItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Status" })
  status: DetailedModelPackageStatusEnum;
}
