import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Mailbox extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actual_size" })
  actualSize?: number;

  @SpeakeasyMetadata({ data: "json, name=max_size" })
  maxSize?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
