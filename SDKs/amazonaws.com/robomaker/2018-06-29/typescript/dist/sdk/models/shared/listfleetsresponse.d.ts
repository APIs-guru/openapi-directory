import { SpeakeasyBase } from "../../../internal/utils";
import { Fleet } from "./fleet";
export declare class ListFleetsResponse extends SpeakeasyBase {
    fleetDetails?: Fleet[];
    nextToken?: string;
}
