import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAliasesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;
}

export enum ListAliasesXAmzTargetEnum {
    TrentServiceListAliases = "TrentService.ListAliases"
}


export class ListAliasesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListAliasesXAmzTargetEnum;
}


export class ListAliasesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAliasesQueryParams;

  @Metadata()
  headers: ListAliasesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListAliasesRequest;
}


export class ListAliasesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dependencyTimeoutException?: any;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  invalidMarkerException?: any;

  @Metadata()
  kmsInternalException?: any;

  @Metadata()
  listAliasesResponse?: shared.ListAliasesResponse;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;
}
