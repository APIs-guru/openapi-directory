import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ModelPackageStatusItem } from "./modelpackagestatusitem";
import { ModelPackageStatusItem } from "./modelpackagestatusitem";


// ModelPackageStatusDetails
/** 
 * Specifies the validation and image scan statuses of the model package.
**/
export class ModelPackageStatusDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImageScanStatuses", elemType: shared.ModelPackageStatusItem })
  imageScanStatuses?: ModelPackageStatusItem[];

  @Metadata({ data: "json, name=ValidationStatuses", elemType: shared.ModelPackageStatusItem })
  validationStatuses: ModelPackageStatusItem[];
}
