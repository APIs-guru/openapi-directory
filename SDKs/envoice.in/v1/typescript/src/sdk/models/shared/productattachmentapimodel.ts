import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProductAttachmentApiModelTypeEnum {
    External = "External"
,    Uploaded = "Uploaded"
}


export class ProductAttachmentApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=Link" })
  link?: string;

  @Metadata({ data: "json, name=ObfuscatedFileName" })
  obfuscatedFileName?: string;

  @Metadata({ data: "json, name=OriginalFileName" })
  originalFileName?: string;

  @Metadata({ data: "json, name=Size" })
  size?: number;

  @Metadata({ data: "json, name=Type" })
  type?: ProductAttachmentApiModelTypeEnum;
}
