import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DestinyAdvancedAwaInitializeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  correlationId?: string;

  @SpeakeasyMetadata()
  sentToSelf?: boolean;
}
