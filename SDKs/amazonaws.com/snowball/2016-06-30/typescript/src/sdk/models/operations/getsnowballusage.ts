import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetSnowballUsageXAmzTargetEnum {
    AwsieSnowballJobManagementServiceGetSnowballUsage = "AWSIESnowballJobManagementService.GetSnowballUsage"
}


export class GetSnowballUsageHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetSnowballUsageXAmzTargetEnum;
}


export class GetSnowballUsageRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetSnowballUsageHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class GetSnowballUsageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSnowballUsageResult?: shared.GetSnowballUsageResult;

  @Metadata()
  statusCode: number;
}
