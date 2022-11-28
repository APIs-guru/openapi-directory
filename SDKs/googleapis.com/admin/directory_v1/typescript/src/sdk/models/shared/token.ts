import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Token
/** 
 * JSON template for token resource in Directory API.
**/
export class Token extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=anonymous" })
  anonymous?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayText" })
  displayText?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nativeApp" })
  nativeApp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=userKey" })
  userKey?: string;
}
