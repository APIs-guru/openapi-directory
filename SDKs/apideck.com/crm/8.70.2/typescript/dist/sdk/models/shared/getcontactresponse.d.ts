import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Contact } from "./contact";
export declare class GetContactResponse extends SpeakeasyBase {
    data: Contact;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
