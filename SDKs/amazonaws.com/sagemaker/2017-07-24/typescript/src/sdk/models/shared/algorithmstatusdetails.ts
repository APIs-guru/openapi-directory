import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AlgorithmStatusItem } from "./algorithmstatusitem";
import { AlgorithmStatusItem } from "./algorithmstatusitem";


// AlgorithmStatusDetails
/** 
 * Specifies the validation and image scan statuses of the algorithm.
**/
export class AlgorithmStatusDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImageScanStatuses", elemType: shared.AlgorithmStatusItem })
  imageScanStatuses?: AlgorithmStatusItem[];

  @Metadata({ data: "json, name=ValidationStatuses", elemType: shared.AlgorithmStatusItem })
  validationStatuses?: AlgorithmStatusItem[];
}
