import { SpeakeasyBase } from "../../../internal/utils";
import { SavingsPlanRate } from "./savingsplanrate";
export declare class DescribeSavingsPlanRatesResponse extends SpeakeasyBase {
    nextToken?: string;
    savingsPlanId?: string;
    searchResults?: SavingsPlanRate[];
}
