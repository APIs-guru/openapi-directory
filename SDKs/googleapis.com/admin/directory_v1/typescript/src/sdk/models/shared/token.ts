import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Token
/** 
 * JSON template for token resource in Directory API.
**/
export class Token extends SpeakeasyBase {
  @Metadata({ data: "json, name=anonymous" })
  anonymous?: boolean;

  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=displayText" })
  displayText?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nativeApp" })
  nativeApp?: boolean;

  @Metadata({ data: "json, name=scopes" })
  scopes?: string[];

  @Metadata({ data: "json, name=userKey" })
  userKey?: string;
}
