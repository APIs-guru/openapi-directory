import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProfitAndLossRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
