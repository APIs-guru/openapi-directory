import { SpeakeasyBase } from "../../../internal/utils";
import { IntentMetadata } from "./intentmetadata";
export declare class GetIntentsResponse extends SpeakeasyBase {
    intents?: IntentMetadata[];
    nextToken?: string;
}
