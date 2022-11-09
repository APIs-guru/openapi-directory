import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TableRow } from "./tablerow";


export class TableDataList extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=rows", elemType: shared.TableRow })
  rows?: TableRow[];

  @Metadata({ data: "json, name=totalRows" })
  totalRows?: string;
}
