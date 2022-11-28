import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResendFailedIpnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}
