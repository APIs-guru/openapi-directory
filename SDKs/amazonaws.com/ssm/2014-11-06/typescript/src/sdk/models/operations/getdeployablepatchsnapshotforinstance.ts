import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetDeployablePatchSnapshotForInstanceXAmzTargetEnum {
    AmazonSsmGetDeployablePatchSnapshotForInstance = "AmazonSSM.GetDeployablePatchSnapshotForInstance"
}


export class GetDeployablePatchSnapshotForInstanceHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetDeployablePatchSnapshotForInstanceXAmzTargetEnum;
}


export class GetDeployablePatchSnapshotForInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetDeployablePatchSnapshotForInstanceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetDeployablePatchSnapshotForInstanceRequest;
}


export class GetDeployablePatchSnapshotForInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDeployablePatchSnapshotForInstanceResult?: shared.GetDeployablePatchSnapshotForInstanceResult;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedFeatureRequiredException?: any;

  @SpeakeasyMetadata()
  unsupportedOperatingSystem?: any;
}
