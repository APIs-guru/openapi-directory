import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateChannelHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum UpdateChannelRequestBodyLatencyModeEnum {
    Normal = "NORMAL",
    Low = "LOW"
}

export enum UpdateChannelRequestBodyTypeEnum {
    Basic = "BASIC",
    Standard = "STANDARD"
}


export class UpdateChannelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=authorized" })
  authorized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=latencyMode" })
  latencyMode?: UpdateChannelRequestBodyLatencyModeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=recordingConfigurationArn" })
  recordingConfigurationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UpdateChannelRequestBodyTypeEnum;
}


export class UpdateChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateChannelHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateChannelRequestBody;
}


export class UpdateChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pendingVerification?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateChannelResponse?: shared.UpdateChannelResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
