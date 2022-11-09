import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectionProperty } from "./connectionproperty";
import { DatasetReference } from "./datasetreference";
import { QueryParameter } from "./queryparameter";


export class QueryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionProperties", elemType: shared.ConnectionProperty })
  connectionProperties?: ConnectionProperty[];

  @Metadata({ data: "json, name=createSession" })
  createSession?: boolean;

  @Metadata({ data: "json, name=defaultDataset" })
  defaultDataset?: DatasetReference;

  @Metadata({ data: "json, name=dryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=maximumBytesBilled" })
  maximumBytesBilled?: string;

  @Metadata({ data: "json, name=parameterMode" })
  parameterMode?: string;

  @Metadata({ data: "json, name=preserveNulls" })
  preserveNulls?: boolean;

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=queryParameters", elemType: shared.QueryParameter })
  queryParameters?: QueryParameter[];

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=timeoutMs" })
  timeoutMs?: number;

  @Metadata({ data: "json, name=useLegacySql" })
  useLegacySql?: boolean;

  @Metadata({ data: "json, name=useQueryCache" })
  useQueryCache?: boolean;
}
