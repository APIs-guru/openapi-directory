import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Actor
/** 
 * Actor
**/
export class Actor extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar_url" })
  avatarUrl: string;

  @Metadata({ data: "json, name=display_login" })
  displayLogin?: string;

  @Metadata({ data: "json, name=gravatar_id" })
  gravatarId: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=login" })
  login: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
