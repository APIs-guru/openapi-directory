import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Announcement
/** 
 * Enterprise global announcement
**/
export class Announcement extends SpeakeasyBase {
  @Metadata({ data: "json, name=announcement" })
  announcement: string;

  @Metadata({ data: "json, name=expires_at" })
  expiresAt?: Date;
}
