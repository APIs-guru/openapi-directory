import { SpeakeasyBase } from "../../../internal/utils";
import { SeverityDescriptionEnum } from "./severitydescriptionenum";
/**
 * Provides the numerical and qualitative representations of a finding's severity.
**/
export declare class Severity extends SpeakeasyBase {
    description?: SeverityDescriptionEnum;
    score?: number;
}
