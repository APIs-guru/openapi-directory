import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImageToTextResponse
/** 
 * Response from an OCR to text operation.  Includes the confience rating and converted text result.
**/
export class ImageToTextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MeanConfidenceLevel" })
  meanConfidenceLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=TextResult" })
  textResult?: string;
}
