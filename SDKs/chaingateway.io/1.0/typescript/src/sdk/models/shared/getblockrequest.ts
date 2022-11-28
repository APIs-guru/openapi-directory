import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBlockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=block" })
  block: string;
}
