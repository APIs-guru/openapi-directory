import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CorrectiveRecommendations } from "./correctiverecommendations";
import { VariationDetails } from "./variationdetails";
import { NameValueList } from "./namevaluelist";
/**
 * This type is used by each listing violation that is returned under the violations container.
**/
export declare class ComplianceDetail extends SpeakeasyBase {
    complianceState?: string;
    correctiveRecommendations?: CorrectiveRecommendations;
    message?: string;
    reasonCode?: string;
    variation?: VariationDetails;
    violationData?: NameValueList[];
}
