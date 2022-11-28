import { SpeakeasyBase } from "../../../internal/utils";
import { Handshake } from "./handshake";
export declare class ListHandshakesForOrganizationResponse extends SpeakeasyBase {
    handshakes?: Handshake[];
    nextToken?: string;
}
