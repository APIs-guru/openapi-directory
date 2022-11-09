import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SettingMetadata } from "./settingmetadata";

export enum SenderFormatEnum {
    Csv = "CSV"
}


// Sender
/** 
 * An sender of reports to the data hub
**/
export class Sender extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=format" })
  format: SenderFormatEnum;

  @Metadata({ data: "json, name=meta" })
  meta?: SettingMetadata;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=organizationName" })
  organizationName?: string;

  @Metadata({ data: "json, name=schema" })
  schema: string;

  @Metadata({ data: "json, name=topic" })
  topic: string;
}
