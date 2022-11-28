import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OcrPageResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MeanConfidenceLevel" })
  meanConfidenceLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=PageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=TextResult" })
  textResult?: string;
}
