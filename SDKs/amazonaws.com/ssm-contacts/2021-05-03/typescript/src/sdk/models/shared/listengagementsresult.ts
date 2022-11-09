import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Engagement } from "./engagement";


export class ListEngagementsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Engagements", elemType: shared.Engagement })
  engagements: Engagement[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
