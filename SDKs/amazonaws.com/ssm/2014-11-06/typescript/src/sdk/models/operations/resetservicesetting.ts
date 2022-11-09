import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ResetServiceSettingXAmzTargetEnum {
    AmazonSsmResetServiceSetting = "AmazonSSM.ResetServiceSetting"
}


export class ResetServiceSettingHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ResetServiceSettingXAmzTargetEnum;
}


export class ResetServiceSettingRequest extends SpeakeasyBase {
  @Metadata()
  headers: ResetServiceSettingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ResetServiceSettingRequest;
}


export class ResetServiceSettingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  resetServiceSettingResult?: shared.ResetServiceSettingResult;

  @Metadata()
  serviceSettingNotFound?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyUpdates?: any;
}
