import { SpeakeasyBase } from "../../../internal/utils";
import { AvroOptions } from "./avrooptions";
import { BigtableOptions } from "./bigtableoptions";
import { CsvOptions } from "./csvoptions";
import { GoogleSheetsOptions } from "./googlesheetsoptions";
import { HivePartitioningOptions } from "./hivepartitioningoptions";
import { ParquetOptions } from "./parquetoptions";
import { TableSchema } from "./tableschema";
export declare class ExternalDataConfiguration extends SpeakeasyBase {
    autodetect?: boolean;
    avroOptions?: AvroOptions;
    bigtableOptions?: BigtableOptions;
    compression?: string;
    connectionId?: string;
    csvOptions?: CsvOptions;
    decimalTargetTypes?: string[];
    googleSheetsOptions?: GoogleSheetsOptions;
    hivePartitioningOptions?: HivePartitioningOptions;
    ignoreUnknownValues?: boolean;
    maxBadRecords?: number;
    metadataCacheMode?: string;
    objectMetadata?: string;
    parquetOptions?: ParquetOptions;
    referenceFileSchemaUri?: string;
    schema?: TableSchema;
    sourceFormat?: string;
    sourceUris?: string[];
}
