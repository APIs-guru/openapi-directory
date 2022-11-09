import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TargetingValue } from "./targetingvalue";
import { TargetingValue } from "./targetingvalue";


// TargetingCriteria
/** 
 * Advertisers can target different attributes of an ad slot. For example, they can choose to show ads only if the user is in the U.S. Such targeting criteria can be specified as part of Shared Targeting.
**/
export class TargetingCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=exclusions", elemType: shared.TargetingValue })
  exclusions?: TargetingValue[];

  @Metadata({ data: "json, name=inclusions", elemType: shared.TargetingValue })
  inclusions?: TargetingValue[];

  @Metadata({ data: "json, name=key" })
  key?: string;
}
