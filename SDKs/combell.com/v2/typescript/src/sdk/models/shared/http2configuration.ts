import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Http2Configuration extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
