import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StatusCheckPolicy
/** 
 * Status Check Policy
**/
export class StatusCheckPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contexts" })
  contexts: string[];

  @SpeakeasyMetadata({ data: "json, name=contexts_url" })
  contextsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=strict" })
  strict: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
