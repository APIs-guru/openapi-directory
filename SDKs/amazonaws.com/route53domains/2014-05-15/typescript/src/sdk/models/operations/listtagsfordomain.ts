import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListTagsForDomainXAmzTargetEnum {
    Route53DomainsV20140515ListTagsForDomain = "Route53Domains_v20140515.ListTagsForDomain"
}


export class ListTagsForDomainHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListTagsForDomainXAmzTargetEnum;
}


export class ListTagsForDomainRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListTagsForDomainHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListTagsForDomainRequest;
}


export class ListTagsForDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  listTagsForDomainResponse?: shared.ListTagsForDomainResponse;

  @Metadata()
  operationLimitExceeded?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedTld?: any;
}
