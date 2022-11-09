import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ModeEnum } from "./modeenum";
import { RuntimeEnum } from "./runtimeenum";


// FunctionConfiguration
/** 
 * A complex type that describes function metadata.
**/
export class FunctionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeSize" })
  codeSize?: number;

  @Metadata({ data: "json, name=ConfigurationId" })
  configurationId?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=FunctionARN" })
  functionArn?: string;

  @Metadata({ data: "json, name=FunctionName" })
  functionName?: string;

  @Metadata({ data: "json, name=Handler" })
  handler?: string;

  @Metadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=MemorySize" })
  memorySize?: number;

  @Metadata({ data: "json, name=Mode" })
  mode?: ModeEnum;

  @Metadata({ data: "json, name=Role" })
  role?: string;

  @Metadata({ data: "json, name=Runtime" })
  runtime?: RuntimeEnum;

  @Metadata({ data: "json, name=Timeout" })
  timeout?: number;
}
