import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SftpTransport } from "./sftptransport";
import { As2Transport } from "./as2transport";
import { BlobStoreTransport } from "./blobstoretransport";
import { NullTransport } from "./nulltransport";


export enum CustomConfigurationFormatEnum {
    Csv = "CSV",
    Hl7 = "HL7"
}


// CustomConfiguration
/** 
 * A custom configuration for a custom schema
**/
export class CustomConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format: CustomConfigurationFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=nameFormat" })
  nameFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=receivingOrganization" })
  receivingOrganization?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaName" })
  schemaName: string;

  @SpeakeasyMetadata({ data: "json, name=transport" })
  transport: any;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
