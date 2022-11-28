import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmStatusItem } from "./algorithmstatusitem";



// AlgorithmStatusDetails
/** 
 * Specifies the validation and image scan statuses of the algorithm.
**/
export class AlgorithmStatusDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageScanStatuses", elemType: AlgorithmStatusItem })
  imageScanStatuses?: AlgorithmStatusItem[];

  @SpeakeasyMetadata({ data: "json, name=ValidationStatuses", elemType: AlgorithmStatusItem })
  validationStatuses?: AlgorithmStatusItem[];
}
