import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IpRange extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidrip?: string;

  @SpeakeasyMetadata()
  status?: string;
}
