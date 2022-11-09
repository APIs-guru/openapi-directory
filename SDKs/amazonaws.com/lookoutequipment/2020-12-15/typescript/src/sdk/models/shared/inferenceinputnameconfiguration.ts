import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InferenceInputNameConfiguration
/** 
 * Specifies configuration information for the input data for the inference, including timestamp format and delimiter. 
**/
export class InferenceInputNameConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComponentTimestampDelimiter" })
  componentTimestampDelimiter?: string;

  @Metadata({ data: "json, name=TimestampFormat" })
  timestampFormat?: string;
}
