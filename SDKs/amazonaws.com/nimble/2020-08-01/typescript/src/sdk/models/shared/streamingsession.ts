import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamingSessionStateEnum } from "./streamingsessionstateenum";
import { StreamingSessionStatusCodeEnum } from "./streamingsessionstatuscodeenum";



export class StreamingSession extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=ec2InstanceType" })
  ec2InstanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=launchProfileId" })
  launchProfileId?: string;

  @SpeakeasyMetadata({ data: "json, name=ownedBy" })
  ownedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: StreamingSessionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: StreamingSessionStatusCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=streamingImageId" })
  streamingImageId?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=terminateAt" })
  terminateAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy?: string;
}
