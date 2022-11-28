import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListStreamConsumersInput extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    streamArn: string;
    streamCreationTimestamp?: Date;
}
