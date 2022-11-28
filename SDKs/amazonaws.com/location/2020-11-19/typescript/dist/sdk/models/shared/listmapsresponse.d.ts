import { SpeakeasyBase } from "../../../internal/utils";
import { ListMapsResponseEntry } from "./listmapsresponseentry";
export declare class ListMapsResponse extends SpeakeasyBase {
    entries: ListMapsResponseEntry[];
    nextToken?: string;
}
