import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Http2Configuration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
