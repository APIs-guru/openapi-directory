import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SyslogMsg extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=separator" })
  separator?: string;

  @SpeakeasyMetadata({ data: "json, name=sequence" })
  sequence?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;
}
