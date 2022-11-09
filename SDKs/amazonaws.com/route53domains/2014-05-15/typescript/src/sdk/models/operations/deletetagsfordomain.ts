import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteTagsForDomainXAmzTargetEnum {
    Route53DomainsV20140515DeleteTagsForDomain = "Route53Domains_v20140515.DeleteTagsForDomain"
}


export class DeleteTagsForDomainHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteTagsForDomainXAmzTargetEnum;
}


export class DeleteTagsForDomainRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteTagsForDomainHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteTagsForDomainRequest;
}


export class DeleteTagsForDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteTagsForDomainResponse?: Map<string, any>;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  operationLimitExceeded?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedTld?: any;
}
