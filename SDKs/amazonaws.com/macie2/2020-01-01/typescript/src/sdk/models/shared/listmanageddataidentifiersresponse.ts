import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ManagedDataIdentifierSummary } from "./manageddataidentifiersummary";


export class ListManagedDataIdentifiersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.ManagedDataIdentifierSummary })
  items?: ManagedDataIdentifierSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
