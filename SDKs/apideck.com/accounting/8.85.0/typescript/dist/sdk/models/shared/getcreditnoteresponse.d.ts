import { SpeakeasyBase } from "../../../internal/utils";
import { CreditNote } from "./creditnote";
export declare class GetCreditNoteResponse extends SpeakeasyBase {
    data: CreditNote;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
