import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Tax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=employer" })
  employer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
