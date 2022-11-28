import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for <a>DeleteStream</a>.
**/
export declare class DeleteStreamInput extends SpeakeasyBase {
    enforceConsumerDeletion?: boolean;
    streamName: string;
}
