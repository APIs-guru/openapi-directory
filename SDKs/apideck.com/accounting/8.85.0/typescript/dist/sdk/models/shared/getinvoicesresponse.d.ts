import { SpeakeasyBase } from "../../../internal/utils";
import { Invoice } from "./invoice";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetInvoicesResponse extends SpeakeasyBase {
    data: Invoice[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
