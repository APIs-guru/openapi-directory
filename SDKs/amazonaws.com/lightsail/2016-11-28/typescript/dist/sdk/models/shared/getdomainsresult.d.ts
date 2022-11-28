import { SpeakeasyBase } from "../../../internal/utils";
import { Domain } from "./domain";
export declare class GetDomainsResult extends SpeakeasyBase {
    domains?: Domain[];
    nextPageToken?: string;
}
