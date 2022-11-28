import { SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetMessagesResponse extends SpeakeasyBase {
    data: Message[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
