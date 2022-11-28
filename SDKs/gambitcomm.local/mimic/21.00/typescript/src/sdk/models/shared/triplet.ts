import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Triplet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: string;

  @SpeakeasyMetadata({ data: "json, name=mib" })
  mib?: string;

  @SpeakeasyMetadata({ data: "json, name=scenario" })
  scenario?: number;
}
