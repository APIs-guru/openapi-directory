import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Disk
/** 
 * The disk identifier.
**/
export class Disk extends SpeakeasyBase {
  @Metadata({ data: "json, name=bytes" })
  bytes?: number;

  @Metadata({ data: "json, name=deviceName" })
  deviceName?: string;
}
