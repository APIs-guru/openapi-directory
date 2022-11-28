import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Example12 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;
}
