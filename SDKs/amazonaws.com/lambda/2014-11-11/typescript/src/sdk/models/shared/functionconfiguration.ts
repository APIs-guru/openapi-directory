import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModeEnum } from "./modeenum";
import { RuntimeEnum } from "./runtimeenum";



// FunctionConfiguration
/** 
 * A complex type that describes function metadata.
**/
export class FunctionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeSize" })
  codeSize?: number;

  @SpeakeasyMetadata({ data: "json, name=ConfigurationId" })
  configurationId?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=FunctionARN" })
  functionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FunctionName" })
  functionName?: string;

  @SpeakeasyMetadata({ data: "json, name=Handler" })
  handler?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=MemorySize" })
  memorySize?: number;

  @SpeakeasyMetadata({ data: "json, name=Mode" })
  mode?: ModeEnum;

  @SpeakeasyMetadata({ data: "json, name=Role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=Runtime" })
  runtime?: RuntimeEnum;

  @SpeakeasyMetadata({ data: "json, name=Timeout" })
  timeout?: number;
}
