import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Disk
/** 
 * The disk identifier.
**/
export class Disk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bytes" })
  bytes?: number;

  @SpeakeasyMetadata({ data: "json, name=deviceName" })
  deviceName?: string;
}
