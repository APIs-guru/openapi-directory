import { SpeakeasyBase } from "../../../internal/utils";
import { IntentMetadata } from "./intentmetadata";
export declare class GetIntentVersionsResponse extends SpeakeasyBase {
    intents?: IntentMetadata[];
    nextToken?: string;
}
