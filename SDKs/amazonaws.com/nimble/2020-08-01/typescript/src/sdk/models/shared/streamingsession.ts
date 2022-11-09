import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamingSessionStateEnum } from "./streamingsessionstateenum";
import { StreamingSessionStatusCodeEnum } from "./streamingsessionstatuscodeenum";


export class StreamingSession extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=ec2InstanceType" })
  ec2InstanceType?: string;

  @Metadata({ data: "json, name=launchProfileId" })
  launchProfileId?: string;

  @Metadata({ data: "json, name=ownedBy" })
  ownedBy?: string;

  @Metadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @Metadata({ data: "json, name=state" })
  state?: StreamingSessionStateEnum;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: StreamingSessionStatusCodeEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=streamingImageId" })
  streamingImageId?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=terminateAt" })
  terminateAt?: Date;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updatedBy" })
  updatedBy?: string;
}
