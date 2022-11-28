import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateTagOptionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
