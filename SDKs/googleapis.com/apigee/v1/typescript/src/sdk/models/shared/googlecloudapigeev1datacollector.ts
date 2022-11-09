import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudApigeeV1DataCollectorTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Integer = "INTEGER"
,    Float = "FLOAT"
,    String = "STRING"
,    Boolean = "BOOLEAN"
,    Datetime = "DATETIME"
}


// GoogleCloudApigeeV1DataCollector
/** 
 * Data collector configuration.
**/
export class GoogleCloudApigeeV1DataCollector extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudApigeeV1DataCollectorTypeEnum;
}
