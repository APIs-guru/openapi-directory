import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttackSummary } from "./attacksummary";


export class ListAttacksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttackSummaries", elemType: shared.AttackSummary })
  attackSummaries?: AttackSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
