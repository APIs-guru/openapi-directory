import { SpeakeasyBase } from "../../../internal/utils";
import { HandshakeFilter } from "./handshakefilter";
export declare class ListHandshakesForAccountRequest extends SpeakeasyBase {
    filter?: HandshakeFilter;
    maxResults?: number;
    nextToken?: string;
}
