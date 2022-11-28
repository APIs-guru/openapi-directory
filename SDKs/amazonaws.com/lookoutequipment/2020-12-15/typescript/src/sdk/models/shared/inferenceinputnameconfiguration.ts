import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InferenceInputNameConfiguration
/** 
 * Specifies configuration information for the input data for the inference, including timestamp format and delimiter. 
**/
export class InferenceInputNameConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComponentTimestampDelimiter" })
  componentTimestampDelimiter?: string;

  @SpeakeasyMetadata({ data: "json, name=TimestampFormat" })
  timestampFormat?: string;
}
