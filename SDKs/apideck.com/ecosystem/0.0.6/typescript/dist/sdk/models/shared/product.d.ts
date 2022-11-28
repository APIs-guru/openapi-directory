import { SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";
import { Translation } from "./translation";
export declare class Product extends SpeakeasyBase {
    count?: number;
    description?: string;
    id?: string;
    logo?: File;
    name: string;
    sequence?: number;
    slug: string;
    translations?: Translation[];
    visible: boolean;
}
