import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PageEntry } from "./pageentry";
import { ItemDetail } from "./itemdetail";
import { ItemList } from "./itemlist";
import { PageMetadata } from "./pagemetadata";
import { Theme } from "./theme";


export class Page extends SpeakeasyBase {
  @Metadata({ data: "json, name=customFields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=entries", elemType: shared.PageEntry })
  entries: PageEntry[];

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=isStatic" })
  isStatic: boolean;

  @Metadata({ data: "json, name=isSystemPage" })
  isSystemPage: boolean;

  @Metadata({ data: "json, name=item" })
  item?: ItemDetail;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=list" })
  list?: ItemList;

  @Metadata({ data: "json, name=metadata" })
  metadata?: PageMetadata;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=template" })
  template: string;

  @Metadata({ data: "json, name=themes", elemType: shared.Theme })
  themes?: Theme[];

  @Metadata({ data: "json, name=title" })
  title: string;
}
