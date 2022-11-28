import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Componentsh0 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: Componentsh0 })
  components?: Componentsh0[];

  @SpeakeasyMetadata({ data: "json, name=describtion" })
  describtion?: string;

  @SpeakeasyMetadata({ data: "json, name=mutlityplier" })
  mutlityplier?: string;

  @SpeakeasyMetadata({ data: "json, name=per" })
  per?: number;

  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum?: number;
}
