import { SpeakeasyBase } from "../../../internal/utils";
import { OwnerOpeningBalanceVatEntryDto } from "./owneropeningbalancevatentrydto";
export declare class OwnerOpeningBalanceDto extends SpeakeasyBase {
    entryDate?: Date;
    id?: number;
    isChanged?: boolean;
    procDate?: Date;
    reference?: string;
    timestamp?: string;
    total?: number;
    totalVat?: number;
    unpaid?: number;
    vatEntries?: OwnerOpeningBalanceVatEntryDto[];
}
