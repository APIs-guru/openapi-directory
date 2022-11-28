import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DestinyAdvancedAwaAuthorizationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionToken?: string;

  @SpeakeasyMetadata()
  developerNote?: string;

  @SpeakeasyMetadata()
  maximumNumberOfUses?: number;

  @SpeakeasyMetadata()
  membershipType?: number;

  @SpeakeasyMetadata()
  responseReason?: number;

  @SpeakeasyMetadata()
  type?: number;

  @SpeakeasyMetadata()
  userSelection?: number;

  @SpeakeasyMetadata()
  validUntil?: Date;
}
