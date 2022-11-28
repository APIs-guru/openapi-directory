import { SpeakeasyBase } from "../../../internal/utils";
import { Translation } from "./translation";
export declare enum MediaTypeEnum {
    Screenshot = "SCREENSHOT",
    Video = "VIDEO"
}
export declare class Media extends SpeakeasyBase {
    caption?: string;
    id?: string;
    sequence?: number;
    translations?: Translation[];
    type?: MediaTypeEnum;
    url: string;
}
