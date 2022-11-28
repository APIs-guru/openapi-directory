import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvroOptions } from "./avrooptions";
import { BigtableOptions } from "./bigtableoptions";
import { CsvOptions } from "./csvoptions";
import { GoogleSheetsOptions } from "./googlesheetsoptions";
import { HivePartitioningOptions } from "./hivepartitioningoptions";
import { ParquetOptions } from "./parquetoptions";
import { TableSchema } from "./tableschema";



export class ExternalDataConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autodetect" })
  autodetect?: boolean;

  @SpeakeasyMetadata({ data: "json, name=avroOptions" })
  avroOptions?: AvroOptions;

  @SpeakeasyMetadata({ data: "json, name=bigtableOptions" })
  bigtableOptions?: BigtableOptions;

  @SpeakeasyMetadata({ data: "json, name=compression" })
  compression?: string;

  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=csvOptions" })
  csvOptions?: CsvOptions;

  @SpeakeasyMetadata({ data: "json, name=decimalTargetTypes" })
  decimalTargetTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=googleSheetsOptions" })
  googleSheetsOptions?: GoogleSheetsOptions;

  @SpeakeasyMetadata({ data: "json, name=hivePartitioningOptions" })
  hivePartitioningOptions?: HivePartitioningOptions;

  @SpeakeasyMetadata({ data: "json, name=ignoreUnknownValues" })
  ignoreUnknownValues?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxBadRecords" })
  maxBadRecords?: number;

  @SpeakeasyMetadata({ data: "json, name=metadataCacheMode" })
  metadataCacheMode?: string;

  @SpeakeasyMetadata({ data: "json, name=objectMetadata" })
  objectMetadata?: string;

  @SpeakeasyMetadata({ data: "json, name=parquetOptions" })
  parquetOptions?: ParquetOptions;

  @SpeakeasyMetadata({ data: "json, name=referenceFileSchemaUri" })
  referenceFileSchemaUri?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: TableSchema;

  @SpeakeasyMetadata({ data: "json, name=sourceFormat" })
  sourceFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceUris" })
  sourceUris?: string[];
}
