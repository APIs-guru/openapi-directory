import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateChannelHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum UpdateChannelRequestBodyLatencyModeEnum {
    Normal = "NORMAL"
,    Low = "LOW"
}

export enum UpdateChannelRequestBodyTypeEnum {
    Basic = "BASIC"
,    Standard = "STANDARD"
}


export class UpdateChannelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=authorized" })
  authorized?: boolean;

  @Metadata({ data: "json, name=latencyMode" })
  latencyMode?: UpdateChannelRequestBodyLatencyModeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=recordingConfigurationArn" })
  recordingConfigurationArn?: string;

  @Metadata({ data: "json, name=type" })
  type?: UpdateChannelRequestBodyTypeEnum;
}


export class UpdateChannelRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateChannelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateChannelRequestBody;
}


export class UpdateChannelResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  pendingVerification?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateChannelResponse?: shared.UpdateChannelResponse;

  @Metadata()
  validationException?: any;
}
