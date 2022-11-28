import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateClusterXAmzTargetEnum {
    AwsieSnowballJobManagementServiceUpdateCluster = "AWSIESnowballJobManagementService.UpdateCluster"
}


export class UpdateClusterHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: UpdateClusterXAmzTargetEnum;
}


export class UpdateClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateClusterHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateClusterRequest;
}


export class UpdateClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ec2RequestFailedException?: any;

  @SpeakeasyMetadata()
  invalidInputCombinationException?: any;

  @SpeakeasyMetadata()
  invalidJobStateException?: any;

  @SpeakeasyMetadata()
  invalidResourceException?: any;

  @SpeakeasyMetadata()
  kmsRequestFailedException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateClusterResult?: Map<string, any>;
}
