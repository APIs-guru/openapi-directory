import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListPlaceIndexesResponseEntry } from "./listplaceindexesresponseentry";


export class ListPlaceIndexesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entries", elemType: shared.ListPlaceIndexesResponseEntry })
  entries: ListPlaceIndexesResponseEntry[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
