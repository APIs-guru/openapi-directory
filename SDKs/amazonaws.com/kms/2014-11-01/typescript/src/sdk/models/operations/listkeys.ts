import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListKeysQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;
}

export enum ListKeysXAmzTargetEnum {
    TrentServiceListKeys = "TrentService.ListKeys"
}


export class ListKeysHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListKeysXAmzTargetEnum;
}


export class ListKeysRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListKeysQueryParams;

  @Metadata()
  headers: ListKeysHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListKeysRequest;
}


export class ListKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dependencyTimeoutException?: any;

  @Metadata()
  invalidMarkerException?: any;

  @Metadata()
  kmsInternalException?: any;

  @Metadata()
  listKeysResponse?: shared.ListKeysResponse;

  @Metadata()
  statusCode: number;
}
