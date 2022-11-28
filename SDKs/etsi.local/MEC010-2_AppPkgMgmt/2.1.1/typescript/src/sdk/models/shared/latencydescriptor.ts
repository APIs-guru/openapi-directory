import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LatencyDescriptor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  maxLatency: number;
}
