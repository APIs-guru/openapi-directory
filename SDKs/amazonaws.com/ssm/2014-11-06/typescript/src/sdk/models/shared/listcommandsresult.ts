import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Command } from "./command";


export class ListCommandsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Commands", elemType: shared.Command })
  commands?: Command[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
