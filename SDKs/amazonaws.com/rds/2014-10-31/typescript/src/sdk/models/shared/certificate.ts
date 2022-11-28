import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Certificate
/** 
 * A CA certificate for an Amazon Web Services account.
**/
export class Certificate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateArn?: string;

  @SpeakeasyMetadata()
  certificateIdentifier?: string;

  @SpeakeasyMetadata()
  certificateType?: string;

  @SpeakeasyMetadata()
  customerOverride?: boolean;

  @SpeakeasyMetadata()
  customerOverrideValidTill?: Date;

  @SpeakeasyMetadata()
  thumbprint?: string;

  @SpeakeasyMetadata()
  validFrom?: Date;

  @SpeakeasyMetadata()
  validTill?: Date;
}
