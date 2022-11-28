import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ElectionsList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cycle" })
  cycle?: number;

  @SpeakeasyMetadata({ data: "json, name=district" })
  district?: string;

  @SpeakeasyMetadata({ data: "json, name=office" })
  office?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}
