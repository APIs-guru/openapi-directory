import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InvoiceAttachmentTypeEnum {
    External = "External",
    Uploaded = "Uploaded"
}


export class InvoiceAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=InvoiceId" })
  invoiceId?: number;

  @SpeakeasyMetadata({ data: "json, name=Link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=ObfuscatedFileName" })
  obfuscatedFileName?: string;

  @SpeakeasyMetadata({ data: "json, name=OriginalFileName" })
  originalFileName?: string;

  @SpeakeasyMetadata({ data: "json, name=Size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: InvoiceAttachmentTypeEnum;
}
