import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErrorProto } from "./errorproto";
import { JobReference } from "./jobreference";
import { TableRow } from "./tablerow";
import { TableSchema } from "./tableschema";


export class GetQueryResultsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cacheHit" })
  cacheHit?: boolean;

  @Metadata({ data: "json, name=errors", elemType: shared.ErrorProto })
  errors?: ErrorProto[];

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=jobComplete" })
  jobComplete?: boolean;

  @Metadata({ data: "json, name=jobReference" })
  jobReference?: JobReference;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=numDmlAffectedRows" })
  numDmlAffectedRows?: string;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=rows", elemType: shared.TableRow })
  rows?: TableRow[];

  @Metadata({ data: "json, name=schema" })
  schema?: TableSchema;

  @Metadata({ data: "json, name=totalBytesProcessed" })
  totalBytesProcessed?: string;

  @Metadata({ data: "json, name=totalRows" })
  totalRows?: string;
}
