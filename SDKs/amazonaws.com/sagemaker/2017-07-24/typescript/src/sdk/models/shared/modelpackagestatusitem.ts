import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetailedModelPackageStatusEnum } from "./detailedmodelpackagestatusenum";



// ModelPackageStatusItem
/** 
 * Represents the overall status of a model package.
**/
export class ModelPackageStatusItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: DetailedModelPackageStatusEnum;
}
