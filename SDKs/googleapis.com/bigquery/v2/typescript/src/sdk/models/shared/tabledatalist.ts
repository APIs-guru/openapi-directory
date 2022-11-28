import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableRow } from "./tablerow";



export class TableDataList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: TableRow })
  rows?: TableRow[];

  @SpeakeasyMetadata({ data: "json, name=totalRows" })
  totalRows?: string;
}
