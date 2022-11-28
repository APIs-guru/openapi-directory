import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A list of your dead letter source queues.
**/
export declare class ListDeadLetterSourceQueuesResult extends SpeakeasyBase {
    nextToken?: string;
    queueUrls: string[];
}
