import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetDeployablePatchSnapshotForInstanceXAmzTargetEnum {
    AmazonSsmGetDeployablePatchSnapshotForInstance = "AmazonSSM.GetDeployablePatchSnapshotForInstance"
}


export class GetDeployablePatchSnapshotForInstanceHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetDeployablePatchSnapshotForInstanceXAmzTargetEnum;
}


export class GetDeployablePatchSnapshotForInstanceRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetDeployablePatchSnapshotForInstanceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetDeployablePatchSnapshotForInstanceRequest;
}


export class GetDeployablePatchSnapshotForInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDeployablePatchSnapshotForInstanceResult?: shared.GetDeployablePatchSnapshotForInstanceResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedFeatureRequiredException?: any;

  @Metadata()
  unsupportedOperatingSystem?: any;
}
