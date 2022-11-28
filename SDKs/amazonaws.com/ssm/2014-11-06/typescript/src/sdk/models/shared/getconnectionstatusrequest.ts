import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConnectionStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Target" })
  target: string;
}
