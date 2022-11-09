import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPersonalizedRankingHeaders extends SpeakeasyBase {
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
}


export class GetPersonalizedRankingRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=campaignArn" })
  campaignArn: string;

  @Metadata({ data: "json, name=context" })
  context?: Map<string, string>;

  @Metadata({ data: "json, name=filterArn" })
  filterArn?: string;

  @Metadata({ data: "json, name=filterValues" })
  filterValues?: Map<string, string>;

  @Metadata({ data: "json, name=inputList" })
  inputList: string[];

  @Metadata({ data: "json, name=userId" })
  userId: string;
}


export class GetPersonalizedRankingRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetPersonalizedRankingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetPersonalizedRankingRequestBody;
}


export class GetPersonalizedRankingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPersonalizedRankingResponse?: shared.GetPersonalizedRankingResponse;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
