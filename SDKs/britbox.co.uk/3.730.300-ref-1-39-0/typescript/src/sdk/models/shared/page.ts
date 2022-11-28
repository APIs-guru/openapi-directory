import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PageEntry } from "./pageentry";
import { ItemDetail } from "./itemdetail";
import { ItemList } from "./itemlist";
import { PageMetadata } from "./pagemetadata";
import { Theme } from "./theme";



export class Page extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=entries", elemType: PageEntry })
  entries: PageEntry[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=isStatic" })
  isStatic: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSystemPage" })
  isSystemPage: boolean;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: ItemDetail;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=list" })
  list?: ItemList;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: PageMetadata;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template: string;

  @SpeakeasyMetadata({ data: "json, name=themes", elemType: Theme })
  themes?: Theme[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}
