import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetingValue } from "./targetingvalue";



// TargetingCriteria
/** 
 * Advertisers can target different attributes of an ad slot. For example, they can choose to show ads only if the user is in the U.S. Such targeting criteria can be specified as part of Shared Targeting.
**/
export class TargetingCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exclusions", elemType: TargetingValue })
  exclusions?: TargetingValue[];

  @SpeakeasyMetadata({ data: "json, name=inclusions", elemType: TargetingValue })
  inclusions?: TargetingValue[];

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;
}
