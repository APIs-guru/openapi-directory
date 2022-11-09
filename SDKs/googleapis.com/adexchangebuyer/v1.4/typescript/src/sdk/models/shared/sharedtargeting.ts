import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TargetingValue } from "./targetingvalue";
import { TargetingValue } from "./targetingvalue";


export class SharedTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=exclusions", elemType: shared.TargetingValue })
  exclusions?: TargetingValue[];

  @Metadata({ data: "json, name=inclusions", elemType: shared.TargetingValue })
  inclusions?: TargetingValue[];

  @Metadata({ data: "json, name=key" })
  key?: string;
}
