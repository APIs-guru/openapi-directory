import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SettingMetadata } from "./settingmetadata";


export enum SenderFormatEnum {
    Csv = "CSV"
}


// Sender
/** 
 * An sender of reports to the data hub
**/
export class Sender extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: SenderFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: SettingMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=organizationName" })
  organizationName?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic: string;
}


// SenderInput
/** 
 * An sender of reports to the data hub
**/
export class SenderInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: SenderFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic: string;
}
