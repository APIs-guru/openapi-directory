import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetingValue } from "./targetingvalue";



export class SharedTargeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exclusions", elemType: TargetingValue })
  exclusions?: TargetingValue[];

  @SpeakeasyMetadata({ data: "json, name=inclusions", elemType: TargetingValue })
  inclusions?: TargetingValue[];

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;
}
