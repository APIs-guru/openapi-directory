import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DiscoverInstancesXAmzTargetEnum {
    Route53AutoNamingV20170314DiscoverInstances = "Route53AutoNaming_v20170314.DiscoverInstances"
}


export class DiscoverInstancesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DiscoverInstancesXAmzTargetEnum;
}


export class DiscoverInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DiscoverInstancesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DiscoverInstancesRequest;
}


export class DiscoverInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  discoverInstancesResponse?: shared.DiscoverInstancesResponse;

  @SpeakeasyMetadata()
  invalidInput?: any;

  @SpeakeasyMetadata()
  namespaceNotFound?: any;

  @SpeakeasyMetadata()
  requestLimitExceeded?: any;

  @SpeakeasyMetadata()
  serviceNotFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
