import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CorrectiveRecommendations } from "./correctiverecommendations";
import { VariationDetails } from "./variationdetails";
import { NameValueList } from "./namevaluelist";



// ComplianceDetail
/** 
 * This type is used by each listing violation that is returned under the violations container.
**/
export class ComplianceDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=complianceState" })
  complianceState?: string;

  @SpeakeasyMetadata({ data: "json, name=correctiveRecommendations" })
  correctiveRecommendations?: CorrectiveRecommendations;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=reasonCode" })
  reasonCode?: string;

  @SpeakeasyMetadata({ data: "json, name=variation" })
  variation?: VariationDetails;

  @SpeakeasyMetadata({ data: "json, name=violationData", elemType: NameValueList })
  violationData?: NameValueList[];
}
