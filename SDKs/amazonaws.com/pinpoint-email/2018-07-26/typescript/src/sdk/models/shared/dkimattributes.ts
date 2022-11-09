import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DkimStatusEnum } from "./dkimstatusenum";


// DkimAttributes
/** 
 * An object that contains information about the DKIM configuration for an email identity.
**/
export class DkimAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=SigningEnabled" })
  signingEnabled?: boolean;

  @Metadata({ data: "json, name=Status" })
  status?: DkimStatusEnum;

  @Metadata({ data: "json, name=Tokens" })
  tokens?: string[];
}
