import { SpeakeasyBase } from "../../../internal/utils";
import { HandshakeFilter } from "./handshakefilter";
export declare class ListHandshakesForOrganizationRequest extends SpeakeasyBase {
    filter?: HandshakeFilter;
    maxResults?: number;
    nextToken?: string;
}
