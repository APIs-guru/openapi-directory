import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=cloneDefinition" })
  cloneDefinition?: CloneDefinition;

  @SpeakeasyMetadata({ data: "json, name=clustering" })
  clustering?: Clustering;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultCollation" })
  defaultCollation?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=encryptionConfiguration" })
  encryptionConfiguration?: EncryptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=expirationTime" })
  expirationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=externalDataConfiguration" })
  externalDataConfiguration?: ExternalDataConfiguration;

  @SpeakeasyMetadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=materializedView" })
  materializedView?: MaterializedViewDefinition;

  @SpeakeasyMetadata({ data: "json, name=maxStaleness" })
  maxStaleness?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: ModelDefinition;

  @SpeakeasyMetadata({ data: "json, name=numBytes" })
  numBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=numLongTermBytes" })
  numLongTermBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=numPhysicalBytes" })
  numPhysicalBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=numRows" })
  numRows?: string;

  @SpeakeasyMetadata({ data: "json, name=num_active_logical_bytes" })
  numActiveLogicalBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=num_active_physical_bytes" })
  numActivePhysicalBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=num_long_term_logical_bytes" })
  numLongTermLogicalBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=num_long_term_physical_bytes" })
  numLongTermPhysicalBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=num_partitions" })
  numPartitions?: string;

  @SpeakeasyMetadata({ data: "json, name=num_time_travel_physical_bytes" })
  numTimeTravelPhysicalBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=num_total_logical_bytes" })
  numTotalLogicalBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=num_total_physical_bytes" })
  numTotalPhysicalBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=rangePartitioning" })
  rangePartitioning?: RangePartitioning;

  @SpeakeasyMetadata({ data: "json, name=requirePartitionFilter" })
  requirePartitionFilter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: TableSchema;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=snapshotDefinition" })
  snapshotDefinition?: SnapshotDefinition;

  @SpeakeasyMetadata({ data: "json, name=streamingBuffer" })
  streamingBuffer?: Streamingbuffer;

  @SpeakeasyMetadata({ data: "json, name=tableReference" })
  tableReference?: TableReference;

  @SpeakeasyMetadata({ data: "json, name=timePartitioning" })
  timePartitioning?: TimePartitioning;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: ViewDefinition;
}
