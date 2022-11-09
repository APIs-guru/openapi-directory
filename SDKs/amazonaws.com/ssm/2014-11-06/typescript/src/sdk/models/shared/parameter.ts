import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ParameterTypeEnum } from "./parametertypeenum";


// Parameter
/** 
 * An Amazon Web Services Systems Manager parameter in Parameter Store.
**/
export class Parameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=ARN" })
  arn?: string;

  @Metadata({ data: "json, name=DataType" })
  dataType?: string;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Selector" })
  selector?: string;

  @Metadata({ data: "json, name=SourceResult" })
  sourceResult?: string;

  @Metadata({ data: "json, name=Type" })
  type?: ParameterTypeEnum;

  @Metadata({ data: "json, name=Value" })
  value?: string;

  @Metadata({ data: "json, name=Version" })
  version?: number;
}
