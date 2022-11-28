import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Clustering } from "./clustering";
import { ConnectionProperty } from "./connectionproperty";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { TableReference } from "./tablereference";
import { DestinationTableProperties } from "./destinationtableproperties";
import { HivePartitioningOptions } from "./hivepartitioningoptions";
import { ParquetOptions } from "./parquetoptions";
import { RangePartitioning } from "./rangepartitioning";
import { TableSchema } from "./tableschema";
import { TimePartitioning } from "./timepartitioning";



export class JobConfigurationLoad extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowJaggedRows" })
  allowJaggedRows?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowQuotedNewlines" })
  allowQuotedNewlines?: boolean;

  @SpeakeasyMetadata({ data: "json, name=autodetect" })
  autodetect?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clustering" })
  clustering?: Clustering;

  @SpeakeasyMetadata({ data: "json, name=connectionProperties", elemType: ConnectionProperty })
  connectionProperties?: ConnectionProperty[];

  @SpeakeasyMetadata({ data: "json, name=createDisposition" })
  createDisposition?: string;

  @SpeakeasyMetadata({ data: "json, name=createSession" })
  createSession?: boolean;

  @SpeakeasyMetadata({ data: "json, name=decimalTargetTypes" })
  decimalTargetTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=destinationEncryptionConfiguration" })
  destinationEncryptionConfiguration?: EncryptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=destinationTable" })
  destinationTable?: TableReference;

  @SpeakeasyMetadata({ data: "json, name=destinationTableProperties" })
  destinationTableProperties?: DestinationTableProperties;

  @SpeakeasyMetadata({ data: "json, name=encoding" })
  encoding?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldDelimiter" })
  fieldDelimiter?: string;

  @SpeakeasyMetadata({ data: "json, name=hivePartitioningOptions" })
  hivePartitioningOptions?: HivePartitioningOptions;

  @SpeakeasyMetadata({ data: "json, name=ignoreUnknownValues" })
  ignoreUnknownValues?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jsonExtension" })
  jsonExtension?: string;

  @SpeakeasyMetadata({ data: "json, name=maxBadRecords" })
  maxBadRecords?: number;

  @SpeakeasyMetadata({ data: "json, name=nullMarker" })
  nullMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=parquetOptions" })
  parquetOptions?: ParquetOptions;

  @SpeakeasyMetadata({ data: "json, name=preserveAsciiControlCharacters" })
  preserveAsciiControlCharacters?: boolean;

  @SpeakeasyMetadata({ data: "json, name=projectionFields" })
  projectionFields?: string[];

  @SpeakeasyMetadata({ data: "json, name=quote" })
  quote?: string;

  @SpeakeasyMetadata({ data: "json, name=rangePartitioning" })
  rangePartitioning?: RangePartitioning;

  @SpeakeasyMetadata({ data: "json, name=referenceFileSchemaUri" })
  referenceFileSchemaUri?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: TableSchema;

  @SpeakeasyMetadata({ data: "json, name=schemaInline" })
  schemaInline?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaInlineFormat" })
  schemaInlineFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaUpdateOptions" })
  schemaUpdateOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=skipLeadingRows" })
  skipLeadingRows?: number;

  @SpeakeasyMetadata({ data: "json, name=sourceFormat" })
  sourceFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceUris" })
  sourceUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=timePartitioning" })
  timePartitioning?: TimePartitioning;

  @SpeakeasyMetadata({ data: "json, name=useAvroLogicalTypes" })
  useAvroLogicalTypes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=writeDisposition" })
  writeDisposition?: string;
}
