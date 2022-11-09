import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NamespaceFilter } from "./namespacefilter";


export class ListNamespacesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.NamespaceFilter })
  filters?: NamespaceFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
