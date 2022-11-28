import { SpeakeasyBase } from "../../../internal/utils";
import { CreditNote } from "./creditnote";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetCreditNotesResponse extends SpeakeasyBase {
    data: CreditNote[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
