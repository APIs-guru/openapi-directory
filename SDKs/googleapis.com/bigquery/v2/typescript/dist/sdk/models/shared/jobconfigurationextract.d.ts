import { SpeakeasyBase } from "../../../internal/utils";
import { ModelReference } from "./modelreference";
import { TableReference } from "./tablereference";
export declare class JobConfigurationExtract extends SpeakeasyBase {
    compression?: string;
    destinationFormat?: string;
    destinationUri?: string;
    destinationUris?: string[];
    fieldDelimiter?: string;
    printHeader?: boolean;
    sourceModel?: ModelReference;
    sourceTable?: TableReference;
    useAvroLogicalTypes?: boolean;
}
