import { SpeakeasyBase } from "../../../internal/utils";
import { Handshake } from "./handshake";
export declare class ListHandshakesForAccountResponse extends SpeakeasyBase {
    handshakes?: Handshake[];
    nextToken?: string;
}
