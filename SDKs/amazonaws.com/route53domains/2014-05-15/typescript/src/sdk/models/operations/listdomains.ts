import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDomainsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: string;
}

export enum ListDomainsXAmzTargetEnum {
    Route53DomainsV20140515ListDomains = "Route53Domains_v20140515.ListDomains"
}


export class ListDomainsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListDomainsXAmzTargetEnum;
}


export class ListDomainsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListDomainsQueryParams;

  @Metadata()
  headers: ListDomainsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListDomainsRequest;
}


export class ListDomainsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  listDomainsResponse?: shared.ListDomainsResponse;

  @Metadata()
  statusCode: number;
}
