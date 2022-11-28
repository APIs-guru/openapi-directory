import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdBlockingRecoveryTag
/** 
 * Representation of an ad blocking recovery tag. See https://support.google.com/adsense/answer/11575177.
**/
export class AdBlockingRecoveryTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorProtectionCode" })
  errorProtectionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}
