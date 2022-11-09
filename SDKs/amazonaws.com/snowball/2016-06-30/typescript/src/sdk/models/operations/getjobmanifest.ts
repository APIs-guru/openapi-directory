import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetJobManifestXAmzTargetEnum {
    AwsieSnowballJobManagementServiceGetJobManifest = "AWSIESnowballJobManagementService.GetJobManifest"
}


export class GetJobManifestHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetJobManifestXAmzTargetEnum;
}


export class GetJobManifestRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetJobManifestHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetJobManifestRequest;
}


export class GetJobManifestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getJobManifestResult?: shared.GetJobManifestResult;

  @Metadata()
  invalidJobStateException?: any;

  @Metadata()
  invalidResourceException?: any;

  @Metadata()
  statusCode: number;
}
