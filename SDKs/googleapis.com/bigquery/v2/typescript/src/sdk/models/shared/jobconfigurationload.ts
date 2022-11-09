import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=allowJaggedRows" })
  allowJaggedRows?: boolean;

  @Metadata({ data: "json, name=allowQuotedNewlines" })
  allowQuotedNewlines?: boolean;

  @Metadata({ data: "json, name=autodetect" })
  autodetect?: boolean;

  @Metadata({ data: "json, name=clustering" })
  clustering?: Clustering;

  @Metadata({ data: "json, name=connectionProperties", elemType: shared.ConnectionProperty })
  connectionProperties?: ConnectionProperty[];

  @Metadata({ data: "json, name=createDisposition" })
  createDisposition?: string;

  @Metadata({ data: "json, name=createSession" })
  createSession?: boolean;

  @Metadata({ data: "json, name=decimalTargetTypes" })
  decimalTargetTypes?: string[];

  @Metadata({ data: "json, name=destinationEncryptionConfiguration" })
  destinationEncryptionConfiguration?: EncryptionConfiguration;

  @Metadata({ data: "json, name=destinationTable" })
  destinationTable?: TableReference;

  @Metadata({ data: "json, name=destinationTableProperties" })
  destinationTableProperties?: DestinationTableProperties;

  @Metadata({ data: "json, name=encoding" })
  encoding?: string;

  @Metadata({ data: "json, name=fieldDelimiter" })
  fieldDelimiter?: string;

  @Metadata({ data: "json, name=hivePartitioningOptions" })
  hivePartitioningOptions?: HivePartitioningOptions;

  @Metadata({ data: "json, name=ignoreUnknownValues" })
  ignoreUnknownValues?: boolean;

  @Metadata({ data: "json, name=jsonExtension" })
  jsonExtension?: string;

  @Metadata({ data: "json, name=maxBadRecords" })
  maxBadRecords?: number;

  @Metadata({ data: "json, name=nullMarker" })
  nullMarker?: string;

  @Metadata({ data: "json, name=parquetOptions" })
  parquetOptions?: ParquetOptions;

  @Metadata({ data: "json, name=preserveAsciiControlCharacters" })
  preserveAsciiControlCharacters?: boolean;

  @Metadata({ data: "json, name=projectionFields" })
  projectionFields?: string[];

  @Metadata({ data: "json, name=quote" })
  quote?: string;

  @Metadata({ data: "json, name=rangePartitioning" })
  rangePartitioning?: RangePartitioning;

  @Metadata({ data: "json, name=referenceFileSchemaUri" })
  referenceFileSchemaUri?: string;

  @Metadata({ data: "json, name=schema" })
  schema?: TableSchema;

  @Metadata({ data: "json, name=schemaInline" })
  schemaInline?: string;

  @Metadata({ data: "json, name=schemaInlineFormat" })
  schemaInlineFormat?: string;

  @Metadata({ data: "json, name=schemaUpdateOptions" })
  schemaUpdateOptions?: string[];

  @Metadata({ data: "json, name=skipLeadingRows" })
  skipLeadingRows?: number;

  @Metadata({ data: "json, name=sourceFormat" })
  sourceFormat?: string;

  @Metadata({ data: "json, name=sourceUris" })
  sourceUris?: string[];

  @Metadata({ data: "json, name=timePartitioning" })
  timePartitioning?: TimePartitioning;

  @Metadata({ data: "json, name=useAvroLogicalTypes" })
  useAvroLogicalTypes?: boolean;

  @Metadata({ data: "json, name=writeDisposition" })
  writeDisposition?: string;
}
