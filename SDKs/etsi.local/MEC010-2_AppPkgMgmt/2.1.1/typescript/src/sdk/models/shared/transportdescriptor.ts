import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TransportDescriptor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  protocol: string;

  @SpeakeasyMetadata()
  security: any;

  @SpeakeasyMetadata()
  type: string;

  @SpeakeasyMetadata()
  version: string;
}
