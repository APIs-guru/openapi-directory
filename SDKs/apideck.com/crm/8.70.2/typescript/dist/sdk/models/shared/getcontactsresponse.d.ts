import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Contact } from "./contact";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetContactsResponse extends SpeakeasyBase {
    data: Contact[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
