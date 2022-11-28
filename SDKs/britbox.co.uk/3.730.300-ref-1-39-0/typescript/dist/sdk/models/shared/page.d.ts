import { SpeakeasyBase } from "../../../internal/utils";
import { PageEntry } from "./pageentry";
import { ItemDetail } from "./itemdetail";
import { ItemList } from "./itemlist";
import { PageMetadata } from "./pagemetadata";
import { Theme } from "./theme";
export declare class Page extends SpeakeasyBase {
    customFields?: Map<string, any>;
    entries: PageEntry[];
    id: string;
    isStatic: boolean;
    isSystemPage: boolean;
    item?: ItemDetail;
    key?: string;
    list?: ItemList;
    metadata?: PageMetadata;
    path: string;
    template: string;
    themes?: Theme[];
    title: string;
}
