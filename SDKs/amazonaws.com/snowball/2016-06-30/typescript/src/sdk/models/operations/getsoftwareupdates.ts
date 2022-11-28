import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetSoftwareUpdatesXAmzTargetEnum {
    AwsieSnowballJobManagementServiceGetSoftwareUpdates = "AWSIESnowballJobManagementService.GetSoftwareUpdates"
}


export class GetSoftwareUpdatesHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetSoftwareUpdatesXAmzTargetEnum;
}


export class GetSoftwareUpdatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetSoftwareUpdatesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetSoftwareUpdatesRequest;
}


export class GetSoftwareUpdatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSoftwareUpdatesResult?: shared.GetSoftwareUpdatesResult;

  @SpeakeasyMetadata()
  invalidJobStateException?: any;

  @SpeakeasyMetadata()
  invalidResourceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
