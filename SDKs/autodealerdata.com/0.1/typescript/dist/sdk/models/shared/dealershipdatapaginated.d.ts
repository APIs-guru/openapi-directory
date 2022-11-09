import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DealershipData } from "./dealershipdata";
export declare class DealershipDataPaginated extends SpeakeasyBase {
    dealers: DealershipData[];
    maxPages: number;
    page: number;
}
