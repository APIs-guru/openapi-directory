import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CancelClusterXAmzTargetEnum {
    AwsieSnowballJobManagementServiceCancelCluster = "AWSIESnowballJobManagementService.CancelCluster"
}


export class CancelClusterHeaders extends SpeakeasyBase {
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
  xAmzTarget: CancelClusterXAmzTargetEnum;
}


export class CancelClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CancelClusterHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CancelClusterRequest;
}


export class CancelClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cancelClusterResult?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidJobStateException?: any;

  @SpeakeasyMetadata()
  invalidResourceException?: any;

  @SpeakeasyMetadata()
  kmsRequestFailedException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
