import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateChannelHeaders extends SpeakeasyBase {
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

export enum CreateChannelRequestBodyLatencyModeEnum {
    Normal = "NORMAL",
    Low = "LOW"
}

export enum CreateChannelRequestBodyTypeEnum {
    Basic = "BASIC",
    Standard = "STANDARD"
}


export class CreateChannelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorized" })
  authorized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=latencyMode" })
  latencyMode?: CreateChannelRequestBodyLatencyModeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=recordingConfigurationArn" })
  recordingConfigurationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CreateChannelRequestBodyTypeEnum;
}


export class CreateChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateChannelHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateChannelRequestBody;
}


export class CreateChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createChannelResponse?: shared.CreateChannelResponse;

  @SpeakeasyMetadata()
  pendingVerification?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
