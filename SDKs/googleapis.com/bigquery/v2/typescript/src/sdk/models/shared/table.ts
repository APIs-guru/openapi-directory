import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloneDefinition } from "./clonedefinition";
import { Clustering } from "./clustering";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { ExternalDataConfiguration } from "./externaldataconfiguration";
import { MaterializedViewDefinition } from "./materializedviewdefinition";
import { ModelDefinition } from "./modeldefinition";
import { RangePartitioning } from "./rangepartitioning";
import { TableSchema } from "./tableschema";
import { SnapshotDefinition } from "./snapshotdefinition";
import { Streamingbuffer } from "./streamingbuffer";
import { TableReference } from "./tablereference";
import { TimePartitioning } from "./timepartitioning";
import { ViewDefinition } from "./viewdefinition";


export class Table extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloneDefinition" })
  cloneDefinition?: CloneDefinition;

  @Metadata({ data: "json, name=clustering" })
  clustering?: Clustering;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=defaultCollation" })
  defaultCollation?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=encryptionConfiguration" })
  encryptionConfiguration?: EncryptionConfiguration;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=expirationTime" })
  expirationTime?: string;

  @Metadata({ data: "json, name=externalDataConfiguration" })
  externalDataConfiguration?: ExternalDataConfiguration;

  @Metadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=materializedView" })
  materializedView?: MaterializedViewDefinition;

  @Metadata({ data: "json, name=maxStaleness" })
  maxStaleness?: string;

  @Metadata({ data: "json, name=model" })
  model?: ModelDefinition;

  @Metadata({ data: "json, name=numBytes" })
  numBytes?: string;

  @Metadata({ data: "json, name=numLongTermBytes" })
  numLongTermBytes?: string;

  @Metadata({ data: "json, name=numPhysicalBytes" })
  numPhysicalBytes?: string;

  @Metadata({ data: "json, name=numRows" })
  numRows?: string;

  @Metadata({ data: "json, name=num_active_logical_bytes" })
  numActiveLogicalBytes?: string;

  @Metadata({ data: "json, name=num_active_physical_bytes" })
  numActivePhysicalBytes?: string;

  @Metadata({ data: "json, name=num_long_term_logical_bytes" })
  numLongTermLogicalBytes?: string;

  @Metadata({ data: "json, name=num_long_term_physical_bytes" })
  numLongTermPhysicalBytes?: string;

  @Metadata({ data: "json, name=num_partitions" })
  numPartitions?: string;

  @Metadata({ data: "json, name=num_time_travel_physical_bytes" })
  numTimeTravelPhysicalBytes?: string;

  @Metadata({ data: "json, name=num_total_logical_bytes" })
  numTotalLogicalBytes?: string;

  @Metadata({ data: "json, name=num_total_physical_bytes" })
  numTotalPhysicalBytes?: string;

  @Metadata({ data: "json, name=rangePartitioning" })
  rangePartitioning?: RangePartitioning;

  @Metadata({ data: "json, name=requirePartitionFilter" })
  requirePartitionFilter?: boolean;

  @Metadata({ data: "json, name=schema" })
  schema?: TableSchema;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=snapshotDefinition" })
  snapshotDefinition?: SnapshotDefinition;

  @Metadata({ data: "json, name=streamingBuffer" })
  streamingBuffer?: Streamingbuffer;

  @Metadata({ data: "json, name=tableReference" })
  tableReference?: TableReference;

  @Metadata({ data: "json, name=timePartitioning" })
  timePartitioning?: TimePartitioning;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=view" })
  view?: ViewDefinition;
}
