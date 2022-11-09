import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CommandPluginStatusEnum } from "./commandpluginstatusenum";


// CommandPlugin
/** 
 * Describes plugin details.
**/
export class CommandPlugin extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Output" })
  output?: string;

  @Metadata({ data: "json, name=OutputS3BucketName" })
  outputS3BucketName?: string;

  @Metadata({ data: "json, name=OutputS3KeyPrefix" })
  outputS3KeyPrefix?: string;

  @Metadata({ data: "json, name=OutputS3Region" })
  outputS3Region?: string;

  @Metadata({ data: "json, name=ResponseCode" })
  responseCode?: number;

  @Metadata({ data: "json, name=ResponseFinishDateTime" })
  responseFinishDateTime?: Date;

  @Metadata({ data: "json, name=ResponseStartDateTime" })
  responseStartDateTime?: Date;

  @Metadata({ data: "json, name=StandardErrorUrl" })
  standardErrorUrl?: string;

  @Metadata({ data: "json, name=StandardOutputUrl" })
  standardOutputUrl?: string;

  @Metadata({ data: "json, name=Status" })
  status?: CommandPluginStatusEnum;

  @Metadata({ data: "json, name=StatusDetails" })
  statusDetails?: string;
}
