import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterTypeEnum } from "./parametertypeenum";



// Parameter
/** 
 * An Amazon Web Services Systems Manager parameter in Parameter Store.
**/
export class Parameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ARN" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=DataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Selector" })
  selector?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceResult" })
  sourceResult?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ParameterTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;
}
