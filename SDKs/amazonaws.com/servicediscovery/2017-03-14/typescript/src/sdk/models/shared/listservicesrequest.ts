import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceFilter } from "./servicefilter";



export class ListServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: ServiceFilter })
  filters?: ServiceFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
