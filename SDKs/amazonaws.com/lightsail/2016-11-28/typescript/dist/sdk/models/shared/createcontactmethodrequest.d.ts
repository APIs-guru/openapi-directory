import { SpeakeasyBase } from "../../../internal/utils";
import { ContactProtocolEnum } from "./contactprotocolenum";
export declare class CreateContactMethodRequest extends SpeakeasyBase {
    contactEndpoint: string;
    protocol: ContactProtocolEnum;
}
