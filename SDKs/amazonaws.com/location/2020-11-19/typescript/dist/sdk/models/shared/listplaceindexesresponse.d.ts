import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ListPlaceIndexesResponseEntry } from "./listplaceindexesresponseentry";
export declare class ListPlaceIndexesResponse extends SpeakeasyBase {
    entries: ListPlaceIndexesResponseEntry[];
    nextToken?: string;
}
