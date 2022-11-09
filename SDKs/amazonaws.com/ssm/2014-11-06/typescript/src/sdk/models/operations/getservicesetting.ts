import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetServiceSettingXAmzTargetEnum {
    AmazonSsmGetServiceSetting = "AmazonSSM.GetServiceSetting"
}


export class GetServiceSettingHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetServiceSettingXAmzTargetEnum;
}


export class GetServiceSettingRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetServiceSettingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetServiceSettingRequest;
}


export class GetServiceSettingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getServiceSettingResult?: shared.GetServiceSettingResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  serviceSettingNotFound?: any;

  @Metadata()
  statusCode: number;
}
