import { SpeakeasyBase } from "../../../internal/utils";
import { ItemTypeEnum } from "./itemtypeenum";
/**
 * A metadata entry for a folder or object.
**/
export declare class Item extends SpeakeasyBase {
    contentLength?: number;
    contentType?: string;
    eTag?: string;
    lastModified?: Date;
    name?: string;
    type?: ItemTypeEnum;
}
