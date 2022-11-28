import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DkimStatusEnum } from "./dkimstatusenum";



// DkimAttributes
/** 
 * An object that contains information about the DKIM configuration for an email identity.
**/
export class DkimAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SigningEnabled" })
  signingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: DkimStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Tokens" })
  tokens?: string[];
}
