import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommandPluginStatusEnum } from "./commandpluginstatusenum";



// CommandPlugin
/** 
 * Describes plugin details.
**/
export class CommandPlugin extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Output" })
  output?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputS3BucketName" })
  outputS3BucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputS3KeyPrefix" })
  outputS3KeyPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputS3Region" })
  outputS3Region?: string;

  @SpeakeasyMetadata({ data: "json, name=ResponseCode" })
  responseCode?: number;

  @SpeakeasyMetadata({ data: "json, name=ResponseFinishDateTime" })
  responseFinishDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ResponseStartDateTime" })
  responseStartDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=StandardErrorUrl" })
  standardErrorUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=StandardOutputUrl" })
  standardOutputUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: CommandPluginStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusDetails" })
  statusDetails?: string;
}
