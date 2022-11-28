import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IpAlias extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IP" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=interface" })
  interface?: string;

  @SpeakeasyMetadata({ data: "json, name=mask" })
  mask?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;
}
