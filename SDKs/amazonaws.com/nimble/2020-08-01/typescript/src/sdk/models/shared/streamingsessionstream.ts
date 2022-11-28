import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamingSessionStreamStateEnum } from "./streamingsessionstreamstateenum";
import { StreamingSessionStreamStatusCodeEnum } from "./streamingsessionstreamstatuscodeenum";



export class StreamingSessionStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=expiresAt" })
  expiresAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=ownedBy" })
  ownedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: StreamingSessionStreamStateEnum;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: StreamingSessionStreamStatusCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=streamId" })
  streamId?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
