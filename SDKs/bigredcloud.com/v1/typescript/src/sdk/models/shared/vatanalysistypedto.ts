import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VatAnalysisTypeDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}
