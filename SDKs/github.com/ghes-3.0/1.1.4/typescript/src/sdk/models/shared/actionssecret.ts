import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionsSecret
/** 
 * Set secrets for GitHub Actions.
**/
export class ActionsSecret extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;
}
