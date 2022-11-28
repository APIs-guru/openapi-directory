import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OrderAttachmentApiModelTypeEnum {
    External = "External",
    Uploaded = "Uploaded"
}


export class OrderAttachmentApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=ObfuscatedFileName" })
  obfuscatedFileName?: string;

  @SpeakeasyMetadata({ data: "json, name=OriginalFileName" })
  originalFileName?: string;

  @SpeakeasyMetadata({ data: "json, name=Size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: OrderAttachmentApiModelTypeEnum;
}
