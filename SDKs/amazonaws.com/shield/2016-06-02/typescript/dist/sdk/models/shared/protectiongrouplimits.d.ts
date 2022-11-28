import { SpeakeasyBase } from "../../../internal/utils";
import { ProtectionGroupPatternTypeLimits } from "./protectiongrouppatterntypelimits";
/**
 * Limits settings on protection groups for your subscription.
**/
export declare class ProtectionGroupLimits extends SpeakeasyBase {
    maxProtectionGroups: number;
    patternTypeLimits: ProtectionGroupPatternTypeLimits;
}
