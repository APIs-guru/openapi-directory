import { SpeakeasyBase } from "../../../internal/utils";
import { TargetingValue } from "./targetingvalue";
/**
 * Advertisers can target different attributes of an ad slot. For example, they can choose to show ads only if the user is in the U.S. Such targeting criteria can be specified as part of Shared Targeting.
**/
export declare class TargetingCriteria extends SpeakeasyBase {
    exclusions?: TargetingValue[];
    inclusions?: TargetingValue[];
    key?: string;
}
