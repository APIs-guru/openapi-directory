import { SpeakeasyBase } from "../../../internal/utils";
import { Content } from "./content";
import { PlayMediaControl } from "./playmediacontrol";
import { QueuePlayPointer } from "./queueplaypointer";
export declare class Queue extends SpeakeasyBase {
    content: Content[];
    contentItemsCount?: number;
    controls?: Map<string, PlayMediaControl>;
    identifier: string;
    insertPointer?: any;
    nextContentUrl?: string;
    playPointer?: QueuePlayPointer;
    prerollSeconds?: number;
    previousContentUrl?: string;
    skipsRemaining?: number;
    version: string;
}
