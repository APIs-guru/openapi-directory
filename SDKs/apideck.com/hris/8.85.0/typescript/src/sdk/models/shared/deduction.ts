import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Deduction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
