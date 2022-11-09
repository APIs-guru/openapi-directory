import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Clustering } from "./clustering";
import { RangePartitioning } from "./rangepartitioning";
import { TableReference } from "./tablereference";
import { TimePartitioning } from "./timepartitioning";


// TableListTablesView
/** 
 * Additional details for a view.
**/
export class TableListTablesView extends SpeakeasyBase {
  @Metadata({ data: "json, name=useLegacySql" })
  useLegacySql?: boolean;
}


export class TableListTables extends SpeakeasyBase {
  @Metadata({ data: "json, name=clustering" })
  clustering?: Clustering;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=expirationTime" })
  expirationTime?: string;

  @Metadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=rangePartitioning" })
  rangePartitioning?: RangePartitioning;

  @Metadata({ data: "json, name=tableReference" })
  tableReference?: TableReference;

  @Metadata({ data: "json, name=timePartitioning" })
  timePartitioning?: TimePartitioning;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=view" })
  view?: TableListTablesView;
}


export class TableList extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=tables", elemType: shared.TableListTables })
  tables?: TableListTables[];

  @Metadata({ data: "json, name=totalItems" })
  totalItems?: number;
}
