import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CommandFilter } from "./commandfilter";


export class ListCommandsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CommandId" })
  commandId?: string;

  @Metadata({ data: "json, name=Filters", elemType: shared.CommandFilter })
  filters?: CommandFilter[];

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
