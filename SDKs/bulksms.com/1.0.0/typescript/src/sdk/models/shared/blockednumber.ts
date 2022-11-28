import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BlockedNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber: string;
}
