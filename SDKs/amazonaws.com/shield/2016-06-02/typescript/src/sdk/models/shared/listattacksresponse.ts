import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttackSummary } from "./attacksummary";



export class ListAttacksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttackSummaries", elemType: AttackSummary })
  attackSummaries?: AttackSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
