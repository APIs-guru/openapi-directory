import { SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";
import { Translation } from "./translation";
export declare class Screenshot extends SpeakeasyBase {
    caption?: string;
    file?: File;
    id?: string;
    translations?: Translation[];
}
