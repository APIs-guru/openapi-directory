import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Timestamp extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nanos?: number;

  @SpeakeasyMetadata()
  seconds?: string;
}
