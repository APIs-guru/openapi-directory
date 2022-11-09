import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OperationFilter } from "./operationfilter";


export class ListOperationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.OperationFilter })
  filters?: OperationFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
