import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConnectionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
