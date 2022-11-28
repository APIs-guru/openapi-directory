import { SpeakeasyBase } from "../../../internal/utils";
import { SeverityLabelEnum } from "./severitylabelenum";
/**
 * The severity assigned to the finding by the finding provider.
**/
export declare class FindingProviderSeverity extends SpeakeasyBase {
    label?: SeverityLabelEnum;
    original?: string;
}
