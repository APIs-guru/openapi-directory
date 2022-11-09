import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OrderAttachmentApiModelTypeEnum {
    External = "External"
,    Uploaded = "Uploaded"
}


export class OrderAttachmentApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Link" })
  link?: string;

  @Metadata({ data: "json, name=ObfuscatedFileName" })
  obfuscatedFileName?: string;

  @Metadata({ data: "json, name=OriginalFileName" })
  originalFileName?: string;

  @Metadata({ data: "json, name=Size" })
  size?: number;

  @Metadata({ data: "json, name=Type" })
  type?: OrderAttachmentApiModelTypeEnum;
}
