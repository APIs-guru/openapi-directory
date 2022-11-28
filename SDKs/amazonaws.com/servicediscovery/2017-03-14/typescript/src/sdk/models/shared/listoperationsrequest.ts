import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperationFilter } from "./operationfilter";



export class ListOperationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: OperationFilter })
  filters?: OperationFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
