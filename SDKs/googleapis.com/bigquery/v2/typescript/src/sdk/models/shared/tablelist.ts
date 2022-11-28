import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Clustering } from "./clustering";
import { RangePartitioning } from "./rangepartitioning";
import { TableReference } from "./tablereference";
import { TimePartitioning } from "./timepartitioning";



// TableListTablesView
/** 
 * Additional details for a view.
**/
export class TableListTablesView extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=useLegacySql" })
  useLegacySql?: boolean;
}


export class TableListTables extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clustering" })
  clustering?: Clustering;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=expirationTime" })
  expirationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=rangePartitioning" })
  rangePartitioning?: RangePartitioning;

  @SpeakeasyMetadata({ data: "json, name=tableReference" })
  tableReference?: TableReference;

  @SpeakeasyMetadata({ data: "json, name=timePartitioning" })
  timePartitioning?: TimePartitioning;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: TableListTablesView;
}


export class TableList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tables", elemType: TableListTables })
  tables?: TableListTables[];

  @SpeakeasyMetadata({ data: "json, name=totalItems" })
  totalItems?: number;
}
