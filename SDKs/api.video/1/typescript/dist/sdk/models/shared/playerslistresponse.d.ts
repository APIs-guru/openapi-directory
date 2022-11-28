import { SpeakeasyBase } from "../../../internal/utils";
import { Player } from "./player";
import { Pagination } from "./pagination";
export declare class PlayersListResponse extends SpeakeasyBase {
    data?: Player[];
    pagination?: Pagination;
}
