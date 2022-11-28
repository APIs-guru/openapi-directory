import { SpeakeasyBase } from "../../../internal/utils";
import { TargetingValue } from "./targetingvalue";
export declare class SharedTargeting extends SpeakeasyBase {
    exclusions?: TargetingValue[];
    inclusions?: TargetingValue[];
    key?: string;
}
