import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum RebuildWorkspacesXAmzTargetEnum {
    WorkspacesServiceRebuildWorkspaces = "WorkspacesService.RebuildWorkspaces"
}


export class RebuildWorkspacesHeaders extends SpeakeasyBase {
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
  xAmzTarget: RebuildWorkspacesXAmzTargetEnum;
}


export class RebuildWorkspacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RebuildWorkspacesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RebuildWorkspacesRequest;
}


export class RebuildWorkspacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rebuildWorkspacesResult?: shared.RebuildWorkspacesResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
