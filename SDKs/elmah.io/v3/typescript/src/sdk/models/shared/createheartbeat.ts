import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateHeartbeat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application" })
  application?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: string;

  @SpeakeasyMetadata({ data: "json, name=took" })
  took?: number;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
