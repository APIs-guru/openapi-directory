import { SpeakeasyBase } from "../../../internal/utils";
import { DealershipData } from "./dealershipdata";
export declare class DealershipDataPaginated extends SpeakeasyBase {
    dealers: DealershipData[];
    maxPages: number;
    page: number;
}
