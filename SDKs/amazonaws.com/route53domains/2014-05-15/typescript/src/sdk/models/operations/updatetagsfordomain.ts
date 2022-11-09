import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateTagsForDomainXAmzTargetEnum {
    Route53DomainsV20140515UpdateTagsForDomain = "Route53Domains_v20140515.UpdateTagsForDomain"
}


export class UpdateTagsForDomainHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateTagsForDomainXAmzTargetEnum;
}


export class UpdateTagsForDomainRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateTagsForDomainHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateTagsForDomainRequest;
}


export class UpdateTagsForDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  operationLimitExceeded?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedTld?: any;

  @Metadata()
  updateTagsForDomainResponse?: Map<string, any>;
}
