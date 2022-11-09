import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CancelClusterXAmzTargetEnum {
    AwsieSnowballJobManagementServiceCancelCluster = "AWSIESnowballJobManagementService.CancelCluster"
}


export class CancelClusterHeaders extends SpeakeasyBase {
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
  xAmzTarget: CancelClusterXAmzTargetEnum;
}


export class CancelClusterRequest extends SpeakeasyBase {
  @Metadata()
  headers: CancelClusterHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CancelClusterRequest;
}


export class CancelClusterResponse extends SpeakeasyBase {
  @Metadata()
  cancelClusterResult?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidJobStateException?: any;

  @Metadata()
  invalidResourceException?: any;

  @Metadata()
  kmsRequestFailedException?: any;

  @Metadata()
  statusCode: number;
}
