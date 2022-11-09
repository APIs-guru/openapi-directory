import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NamespaceSummary } from "./namespacesummary";


export class ListNamespacesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Namespaces", elemType: shared.NamespaceSummary })
  namespaces?: NamespaceSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
