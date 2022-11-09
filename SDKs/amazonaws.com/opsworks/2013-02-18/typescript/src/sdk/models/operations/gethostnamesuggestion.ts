import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetHostnameSuggestionXAmzTargetEnum {
    OpsWorks20130218GetHostnameSuggestion = "OpsWorks_20130218.GetHostnameSuggestion"
}


export class GetHostnameSuggestionHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetHostnameSuggestionXAmzTargetEnum;
}


export class GetHostnameSuggestionRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetHostnameSuggestionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetHostnameSuggestionRequest;
}


export class GetHostnameSuggestionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getHostnameSuggestionResult?: shared.GetHostnameSuggestionResult;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
