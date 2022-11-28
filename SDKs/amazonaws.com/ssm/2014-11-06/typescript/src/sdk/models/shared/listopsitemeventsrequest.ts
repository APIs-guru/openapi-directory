import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpsItemEventFilter } from "./opsitemeventfilter";



export class ListOpsItemEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: OpsItemEventFilter })
  filters?: OpsItemEventFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
