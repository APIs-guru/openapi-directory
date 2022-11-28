import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Example19 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success: boolean;
}
