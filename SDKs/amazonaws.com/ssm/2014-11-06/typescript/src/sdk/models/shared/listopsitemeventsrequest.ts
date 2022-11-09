import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OpsItemEventFilter } from "./opsitemeventfilter";


export class ListOpsItemEventsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.OpsItemEventFilter })
  filters?: OpsItemEventFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
