import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListPlaceIndexesResponseEntry } from "./listplaceindexesresponseentry";



export class ListPlaceIndexesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entries", elemType: ListPlaceIndexesResponseEntry })
  entries: ListPlaceIndexesResponseEntry[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
