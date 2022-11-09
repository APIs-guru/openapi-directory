import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SftpTransport } from "./sftptransport";
import { As2Transport } from "./as2transport";
import { BlobStoreTransport } from "./blobstoretransport";
import { NullTransport } from "./nulltransport";

export enum CustomConfigurationFormatEnum {
    Csv = "CSV"
,    Hl7 = "HL7"
}


// CustomConfiguration
/** 
 * A custom configuration for a custom schema
**/
export class CustomConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=format" })
  format: CustomConfigurationFormatEnum;

  @Metadata({ data: "json, name=nameFormat" })
  nameFormat?: string;

  @Metadata({ data: "json, name=receivingOrganization" })
  receivingOrganization?: string;

  @Metadata({ data: "json, name=schemaName" })
  schemaName: string;

  @Metadata({ data: "json, name=transport" })
  transport: any;

  @Metadata({ data: "json, name=type" })
  type: string;
}
