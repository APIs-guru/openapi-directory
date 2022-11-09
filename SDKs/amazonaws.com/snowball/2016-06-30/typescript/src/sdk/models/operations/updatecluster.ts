import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateClusterXAmzTargetEnum {
    AwsieSnowballJobManagementServiceUpdateCluster = "AWSIESnowballJobManagementService.UpdateCluster"
}


export class UpdateClusterHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateClusterXAmzTargetEnum;
}


export class UpdateClusterRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateClusterHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateClusterRequest;
}


export class UpdateClusterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ec2RequestFailedException?: any;

  @Metadata()
  invalidInputCombinationException?: any;

  @Metadata()
  invalidJobStateException?: any;

  @Metadata()
  invalidResourceException?: any;

  @Metadata()
  kmsRequestFailedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateClusterResult?: Map<string, any>;
}
