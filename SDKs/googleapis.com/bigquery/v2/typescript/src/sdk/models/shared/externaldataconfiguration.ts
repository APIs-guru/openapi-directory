import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AvroOptions } from "./avrooptions";
import { BigtableOptions } from "./bigtableoptions";
import { CsvOptions } from "./csvoptions";
import { GoogleSheetsOptions } from "./googlesheetsoptions";
import { HivePartitioningOptions } from "./hivepartitioningoptions";
import { ParquetOptions } from "./parquetoptions";
import { TableSchema } from "./tableschema";


export class ExternalDataConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=autodetect" })
  autodetect?: boolean;

  @Metadata({ data: "json, name=avroOptions" })
  avroOptions?: AvroOptions;

  @Metadata({ data: "json, name=bigtableOptions" })
  bigtableOptions?: BigtableOptions;

  @Metadata({ data: "json, name=compression" })
  compression?: string;

  @Metadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @Metadata({ data: "json, name=csvOptions" })
  csvOptions?: CsvOptions;

  @Metadata({ data: "json, name=decimalTargetTypes" })
  decimalTargetTypes?: string[];

  @Metadata({ data: "json, name=googleSheetsOptions" })
  googleSheetsOptions?: GoogleSheetsOptions;

  @Metadata({ data: "json, name=hivePartitioningOptions" })
  hivePartitioningOptions?: HivePartitioningOptions;

  @Metadata({ data: "json, name=ignoreUnknownValues" })
  ignoreUnknownValues?: boolean;

  @Metadata({ data: "json, name=maxBadRecords" })
  maxBadRecords?: number;

  @Metadata({ data: "json, name=parquetOptions" })
  parquetOptions?: ParquetOptions;

  @Metadata({ data: "json, name=referenceFileSchemaUri" })
  referenceFileSchemaUri?: string;

  @Metadata({ data: "json, name=schema" })
  schema?: TableSchema;

  @Metadata({ data: "json, name=sourceFormat" })
  sourceFormat?: string;

  @Metadata({ data: "json, name=sourceUris" })
  sourceUris?: string[];
}
