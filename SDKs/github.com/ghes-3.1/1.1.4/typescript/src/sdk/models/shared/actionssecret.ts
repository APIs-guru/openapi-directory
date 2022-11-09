import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActionsSecret
/** 
 * Set secrets for GitHub Actions.
**/
export class ActionsSecret extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;
}
