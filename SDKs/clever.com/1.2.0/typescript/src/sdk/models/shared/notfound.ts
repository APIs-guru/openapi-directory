import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NotFound extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
