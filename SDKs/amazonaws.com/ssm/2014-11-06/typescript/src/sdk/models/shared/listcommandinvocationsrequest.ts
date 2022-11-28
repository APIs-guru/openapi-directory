import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommandFilter } from "./commandfilter";



export class ListCommandInvocationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CommandId" })
  commandId?: string;

  @SpeakeasyMetadata({ data: "json, name=Details" })
  details?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: CommandFilter })
  filters?: CommandFilter[];

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
