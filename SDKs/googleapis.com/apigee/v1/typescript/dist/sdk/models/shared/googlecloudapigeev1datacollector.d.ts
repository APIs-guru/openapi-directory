import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudApigeeV1DataCollectorTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Integer = "INTEGER",
    Float = "FLOAT",
    String = "STRING",
    Boolean = "BOOLEAN",
    Datetime = "DATETIME"
}
/**
 * Data collector configuration.
**/
export declare class GoogleCloudApigeeV1DataCollectorInput extends SpeakeasyBase {
    description?: string;
    name?: string;
    type?: GoogleCloudApigeeV1DataCollectorTypeEnum;
}
/**
 * Data collector configuration.
**/
export declare class GoogleCloudApigeeV1DataCollector extends SpeakeasyBase {
    createdAt?: string;
    description?: string;
    lastModifiedAt?: string;
    name?: string;
    type?: GoogleCloudApigeeV1DataCollectorTypeEnum;
}
