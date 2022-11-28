import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
export declare class ListImagesResponse extends SpeakeasyBase {
    images?: Image[];
    nextToken?: string;
}
