import { SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";
import { Translation } from "./translation";
export declare class Collection extends SpeakeasyBase {
    cardBackgroundColor?: string;
    cardBackgroundImage?: File;
    cardColumns?: number;
    cardStyle?: string;
    count?: number;
    description?: string;
    hiddenFromHomepage?: boolean;
    id?: string;
    logo?: File;
    name: string;
    sequence?: number;
    showMaxItemsHomepage?: number;
    slug: string;
    translations?: Translation[];
    visible: boolean;
}
