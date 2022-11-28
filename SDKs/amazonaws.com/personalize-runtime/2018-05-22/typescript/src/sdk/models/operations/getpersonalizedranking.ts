import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPersonalizedRankingHeaders extends SpeakeasyBase {
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
}


export class GetPersonalizedRankingRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaignArn" })
  campaignArn: string;

  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=filterArn" })
  filterArn?: string;

  @SpeakeasyMetadata({ data: "json, name=filterValues" })
  filterValues?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=inputList" })
  inputList: string[];

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: string;
}


export class GetPersonalizedRankingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetPersonalizedRankingHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: GetPersonalizedRankingRequestBody;
}


export class GetPersonalizedRankingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPersonalizedRankingResponse?: shared.GetPersonalizedRankingResponse;

  @SpeakeasyMetadata()
  invalidInputException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
