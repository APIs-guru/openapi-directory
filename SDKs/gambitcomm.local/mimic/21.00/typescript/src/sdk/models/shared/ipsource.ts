import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IpSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IP" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;
}
