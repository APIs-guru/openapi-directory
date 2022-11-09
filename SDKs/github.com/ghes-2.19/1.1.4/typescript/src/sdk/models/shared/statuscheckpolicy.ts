import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StatusCheckPolicy
/** 
 * Status Check Policy
**/
export class StatusCheckPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=contexts" })
  contexts: string[];

  @Metadata({ data: "json, name=contexts_url" })
  contextsUrl: string;

  @Metadata({ data: "json, name=strict" })
  strict: boolean;

  @Metadata({ data: "json, name=url" })
  url: string;
}
