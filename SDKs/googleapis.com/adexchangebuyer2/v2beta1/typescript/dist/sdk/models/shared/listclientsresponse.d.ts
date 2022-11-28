import { SpeakeasyBase } from "../../../internal/utils";
import { Client } from "./client";
export declare class ListClientsResponse extends SpeakeasyBase {
    clients?: Client[];
    nextPageToken?: string;
}
