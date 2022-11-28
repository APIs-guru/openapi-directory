import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedDataIdentifierSummary } from "./manageddataidentifiersummary";



export class ListManagedDataIdentifiersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ManagedDataIdentifierSummary })
  items?: ManagedDataIdentifierSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
