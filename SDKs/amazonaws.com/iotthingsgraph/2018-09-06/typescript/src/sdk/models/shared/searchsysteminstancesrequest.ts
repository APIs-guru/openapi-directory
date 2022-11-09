import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SystemInstanceFilter } from "./systeminstancefilter";


export class SearchSystemInstancesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.SystemInstanceFilter })
  filters?: SystemInstanceFilter[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
