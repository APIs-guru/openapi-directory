import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceFilter } from "./servicefilter";


export class ListServicesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.ServiceFilter })
  filters?: ServiceFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
