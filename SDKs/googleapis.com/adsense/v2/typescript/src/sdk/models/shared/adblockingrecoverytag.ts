import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdBlockingRecoveryTag
/** 
 * Representation of an ad blocking recovery tag. See https://support.google.com/adsense/answer/11575177.
**/
export class AdBlockingRecoveryTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorProtectionCode" })
  errorProtectionCode?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}
