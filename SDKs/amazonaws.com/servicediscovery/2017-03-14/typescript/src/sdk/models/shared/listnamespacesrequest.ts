import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NamespaceFilter } from "./namespacefilter";



export class ListNamespacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: NamespaceFilter })
  filters?: NamespaceFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
