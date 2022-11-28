import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SftpTransport
/** 
 * Describes a single SFTP connection in all of it variations
**/
export class SftpTransport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filePath" })
  filePath: string;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
