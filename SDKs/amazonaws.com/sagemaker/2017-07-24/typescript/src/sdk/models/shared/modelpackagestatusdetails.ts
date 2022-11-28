import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModelPackageStatusItem } from "./modelpackagestatusitem";



// ModelPackageStatusDetails
/** 
 * Specifies the validation and image scan statuses of the model package.
**/
export class ModelPackageStatusDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageScanStatuses", elemType: ModelPackageStatusItem })
  imageScanStatuses?: ModelPackageStatusItem[];

  @SpeakeasyMetadata({ data: "json, name=ValidationStatuses", elemType: ModelPackageStatusItem })
  validationStatuses: ModelPackageStatusItem[];
}
