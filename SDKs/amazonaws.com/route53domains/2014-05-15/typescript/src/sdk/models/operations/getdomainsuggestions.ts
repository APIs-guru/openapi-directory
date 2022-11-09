import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetDomainSuggestionsXAmzTargetEnum {
    Route53DomainsV20140515GetDomainSuggestions = "Route53Domains_v20140515.GetDomainSuggestions"
}


export class GetDomainSuggestionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetDomainSuggestionsXAmzTargetEnum;
}


export class GetDomainSuggestionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetDomainSuggestionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetDomainSuggestionsRequest;
}


export class GetDomainSuggestionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDomainSuggestionsResponse?: shared.GetDomainSuggestionsResponse;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedTld?: any;
}
