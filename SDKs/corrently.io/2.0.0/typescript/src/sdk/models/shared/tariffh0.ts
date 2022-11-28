import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Tariffh0 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ap" })
  ap?: number;

  @SpeakeasyMetadata({ data: "json, name=gp" })
  gp?: number;
}
