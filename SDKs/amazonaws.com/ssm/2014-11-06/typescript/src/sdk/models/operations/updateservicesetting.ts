import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateServiceSettingXAmzTargetEnum {
    AmazonSsmUpdateServiceSetting = "AmazonSSM.UpdateServiceSetting"
}


export class UpdateServiceSettingHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateServiceSettingXAmzTargetEnum;
}


export class UpdateServiceSettingRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateServiceSettingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateServiceSettingRequest;
}


export class UpdateServiceSettingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  serviceSettingNotFound?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyUpdates?: any;

  @Metadata()
  updateServiceSettingResult?: Map<string, any>;
}
