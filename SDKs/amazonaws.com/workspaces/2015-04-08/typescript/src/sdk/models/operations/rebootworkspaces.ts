import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum RebootWorkspacesXAmzTargetEnum {
    WorkspacesServiceRebootWorkspaces = "WorkspacesService.RebootWorkspaces"
}


export class RebootWorkspacesHeaders extends SpeakeasyBase {
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
  xAmzTarget: RebootWorkspacesXAmzTargetEnum;
}


export class RebootWorkspacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RebootWorkspacesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RebootWorkspacesRequest;
}


export class RebootWorkspacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rebootWorkspacesResult?: shared.RebootWorkspacesResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
