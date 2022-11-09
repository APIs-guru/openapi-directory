import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImageToTextResponse
/** 
 * Response from an OCR to text operation.  Includes the confience rating and converted text result.
**/
export class ImageToTextResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MeanConfidenceLevel" })
  meanConfidenceLevel?: number;

  @Metadata({ data: "json, name=TextResult" })
  textResult?: string;
}
