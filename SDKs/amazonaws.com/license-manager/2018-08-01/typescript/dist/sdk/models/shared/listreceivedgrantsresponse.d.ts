import { SpeakeasyBase } from "../../../internal/utils";
import { Grant } from "./grant";
export declare class ListReceivedGrantsResponse extends SpeakeasyBase {
    grants?: Grant[];
    nextToken?: string;
}
