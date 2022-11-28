import { SpeakeasyBase } from "../../../internal/utils";
import { BuiltinIntentMetadata } from "./builtinintentmetadata";
export declare class GetBuiltinIntentsResponse extends SpeakeasyBase {
    intents?: BuiltinIntentMetadata[];
    nextToken?: string;
}
