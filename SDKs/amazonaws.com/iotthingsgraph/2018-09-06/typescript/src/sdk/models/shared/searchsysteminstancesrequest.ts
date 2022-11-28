import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SystemInstanceFilter } from "./systeminstancefilter";



export class SearchSystemInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: SystemInstanceFilter })
  filters?: SystemInstanceFilter[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
