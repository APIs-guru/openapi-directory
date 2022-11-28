import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudApigeeV1DataCollectorTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Integer = "INTEGER",
    Float = "FLOAT",
    String = "STRING",
    Boolean = "BOOLEAN",
    Datetime = "DATETIME"
}


// GoogleCloudApigeeV1DataCollectorInput
/** 
 * Data collector configuration.
**/
export class GoogleCloudApigeeV1DataCollectorInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudApigeeV1DataCollectorTypeEnum;
}


// GoogleCloudApigeeV1DataCollector
/** 
 * Data collector configuration.
**/
export class GoogleCloudApigeeV1DataCollector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudApigeeV1DataCollectorTypeEnum;
}
