import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSummary } from "./rulesummary";


export class ListRulesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=Rules", elemType: shared.RuleSummary })
  rules?: RuleSummary[];
}
