import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Outpost } from "./outpost";


export class ListOutpostsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Outposts", elemType: shared.Outpost })
  outposts?: Outpost[];
}
