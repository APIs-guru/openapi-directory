import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OcrPageResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=MeanConfidenceLevel" })
  meanConfidenceLevel?: number;

  @Metadata({ data: "json, name=PageNumber" })
  pageNumber?: number;

  @Metadata({ data: "json, name=TextResult" })
  textResult?: string;
}
