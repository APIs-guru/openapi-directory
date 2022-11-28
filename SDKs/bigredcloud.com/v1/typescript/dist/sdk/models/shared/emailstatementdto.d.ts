import { SpeakeasyBase } from "../../../internal/utils";
export declare class EmailStatementDto extends SpeakeasyBase {
    bccAddresses?: string[];
    customerId?: number;
    fromPeriod?: Date;
    messageBody?: string;
    minimumBalance?: number;
    toAddress?: string;
    toPeriod?: Date;
}
