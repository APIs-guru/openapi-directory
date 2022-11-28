import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionProperty } from "./connectionproperty";
import { DatasetReference } from "./datasetreference";
import { QueryParameter } from "./queryparameter";



export class QueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionProperties", elemType: ConnectionProperty })
  connectionProperties?: ConnectionProperty[];

  @SpeakeasyMetadata({ data: "json, name=createSession" })
  createSession?: boolean;

  @SpeakeasyMetadata({ data: "json, name=defaultDataset" })
  defaultDataset?: DatasetReference;

  @SpeakeasyMetadata({ data: "json, name=dryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=maximumBytesBilled" })
  maximumBytesBilled?: string;

  @SpeakeasyMetadata({ data: "json, name=parameterMode" })
  parameterMode?: string;

  @SpeakeasyMetadata({ data: "json, name=preserveNulls" })
  preserveNulls?: boolean;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=queryParameters", elemType: QueryParameter })
  queryParameters?: QueryParameter[];

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=timeoutMs" })
  timeoutMs?: number;

  @SpeakeasyMetadata({ data: "json, name=useLegacySql" })
  useLegacySql?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useQueryCache" })
  useQueryCache?: boolean;
}
