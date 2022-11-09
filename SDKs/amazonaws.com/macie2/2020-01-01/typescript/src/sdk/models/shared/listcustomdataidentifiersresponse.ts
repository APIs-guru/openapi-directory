import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomDataIdentifierSummary } from "./customdataidentifiersummary";


export class ListCustomDataIdentifiersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.CustomDataIdentifierSummary })
  items?: CustomDataIdentifierSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
