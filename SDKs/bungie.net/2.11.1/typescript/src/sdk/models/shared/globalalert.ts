import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamInfo } from "./streaminfo";



export class GlobalAlert extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alertHtml?: string;

  @SpeakeasyMetadata()
  alertKey?: string;

  @SpeakeasyMetadata()
  alertLevel?: number;

  @SpeakeasyMetadata()
  alertLink?: string;

  @SpeakeasyMetadata()
  alertTimestamp?: Date;

  @SpeakeasyMetadata()
  alertType?: number;

  @SpeakeasyMetadata()
  streamInfo?: StreamInfo;
}
