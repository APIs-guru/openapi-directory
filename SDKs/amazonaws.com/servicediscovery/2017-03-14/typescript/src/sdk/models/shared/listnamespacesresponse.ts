import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NamespaceSummary } from "./namespacesummary";



export class ListNamespacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Namespaces", elemType: NamespaceSummary })
  namespaces?: NamespaceSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
