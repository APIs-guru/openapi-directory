import { SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
export declare class GetMessageResponse extends SpeakeasyBase {
    data: Message;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
