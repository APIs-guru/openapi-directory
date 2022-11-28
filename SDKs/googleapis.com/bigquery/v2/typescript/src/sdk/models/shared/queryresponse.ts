import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DmlStatistics } from "./dmlstatistics";
import { ErrorProto } from "./errorproto";
import { JobReference } from "./jobreference";
import { TableRow } from "./tablerow";
import { TableSchema } from "./tableschema";
import { SessionInfo } from "./sessioninfo";



export class QueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cacheHit" })
  cacheHit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dmlStats" })
  dmlStats?: DmlStatistics;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ErrorProto })
  errors?: ErrorProto[];

  @SpeakeasyMetadata({ data: "json, name=jobComplete" })
  jobComplete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jobReference" })
  jobReference?: JobReference;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=numDmlAffectedRows" })
  numDmlAffectedRows?: string;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: TableRow })
  rows?: TableRow[];

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: TableSchema;

  @SpeakeasyMetadata({ data: "json, name=sessionInfo" })
  sessionInfo?: SessionInfo;

  @SpeakeasyMetadata({ data: "json, name=totalBytesProcessed" })
  totalBytesProcessed?: string;

  @SpeakeasyMetadata({ data: "json, name=totalRows" })
  totalRows?: string;
}
