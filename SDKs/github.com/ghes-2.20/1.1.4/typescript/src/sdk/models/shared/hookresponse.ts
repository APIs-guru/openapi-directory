import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;
}
