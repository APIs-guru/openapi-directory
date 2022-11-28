import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Announcement
/** 
 * Enterprise global announcement
**/
export class Announcement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=announcement" })
  announcement: string;

  @SpeakeasyMetadata({ data: "json, name=expires_at" })
  expiresAt?: Date;
}
