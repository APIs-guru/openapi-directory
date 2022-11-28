import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
import { Image } from "./image";
import { Row } from "./row";
import { TextSnippet } from "./textsnippet";
/**
 * Example data used for training or prediction.
**/
export declare class ExamplePayload extends SpeakeasyBase {
    document?: Document;
    image?: Image;
    row?: Row;
    textSnippet?: TextSnippet;
}
