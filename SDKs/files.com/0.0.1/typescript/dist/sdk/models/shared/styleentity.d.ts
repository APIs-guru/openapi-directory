import { SpeakeasyBase } from "../../../internal/utils";
import { ImageEntity } from "./imageentity";
/**
 * Show Style
**/
export declare class StyleEntity extends SpeakeasyBase {
    id?: number;
    logo?: ImageEntity;
    path?: string;
    thumbnail?: ImageEntity;
}
