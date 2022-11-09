import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SyslogMsg extends SpeakeasyBase {
  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=separator" })
  separator?: string;

  @Metadata({ data: "json, name=sequence" })
  sequence?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;
}
