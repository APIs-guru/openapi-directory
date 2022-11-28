import { SpeakeasyBase } from "../../../internal/utils";
import { Client } from "./client";
/**
 * Response message for the list method.
**/
export declare class ListClientsResponse extends SpeakeasyBase {
    clients?: Client[];
    nextPageToken?: string;
}
