import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CorrectiveRecommendations } from "./correctiverecommendations";
import { VariationDetails } from "./variationdetails";
import { NameValueList } from "./namevaluelist";


// ComplianceDetail
/** 
 * This type is used by each listing violation that is returned under the violations container.
**/
export class ComplianceDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=complianceState" })
  complianceState?: string;

  @Metadata({ data: "json, name=correctiveRecommendations" })
  correctiveRecommendations?: CorrectiveRecommendations;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=reasonCode" })
  reasonCode?: string;

  @Metadata({ data: "json, name=variation" })
  variation?: VariationDetails;

  @Metadata({ data: "json, name=violationData", elemType: shared.NameValueList })
  violationData?: NameValueList[];
}
