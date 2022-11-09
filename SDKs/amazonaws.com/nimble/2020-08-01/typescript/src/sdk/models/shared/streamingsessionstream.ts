import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamingSessionStreamStateEnum } from "./streamingsessionstreamstateenum";
import { StreamingSessionStreamStatusCodeEnum } from "./streamingsessionstreamstatuscodeenum";


export class StreamingSessionStream extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=expiresAt" })
  expiresAt?: Date;

  @Metadata({ data: "json, name=ownedBy" })
  ownedBy?: string;

  @Metadata({ data: "json, name=state" })
  state?: StreamingSessionStreamStateEnum;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: StreamingSessionStreamStatusCodeEnum;

  @Metadata({ data: "json, name=streamId" })
  streamId?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
