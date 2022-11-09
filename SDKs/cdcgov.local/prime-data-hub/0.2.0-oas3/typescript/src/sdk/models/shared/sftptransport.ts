import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SftpTransport
/** 
 * Describes a single SFTP connection in all of it variations
**/
export class SftpTransport extends SpeakeasyBase {
  @Metadata({ data: "json, name=filePath" })
  filePath: string;

  @Metadata({ data: "json, name=host" })
  host: string;

  @Metadata({ data: "json, name=port" })
  port: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}
