import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Engagement } from "./engagement";



export class ListEngagementsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Engagements", elemType: Engagement })
  engagements: Engagement[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
