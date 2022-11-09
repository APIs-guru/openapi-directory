import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchPlaceIndexForTextPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=IndexName" })
  indexName: string;
}


export class SearchPlaceIndexForTextHeaders extends SpeakeasyBase {
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


export class SearchPlaceIndexForTextRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=BiasPosition" })
  biasPosition?: number[];

  @Metadata({ data: "json, name=FilterBBox" })
  filterBBox?: number[];

  @Metadata({ data: "json, name=FilterCountries" })
  filterCountries?: string[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=Text" })
  text: string;
}


export class SearchPlaceIndexForTextRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SearchPlaceIndexForTextPathParams;

  @Metadata()
  headers: SearchPlaceIndexForTextHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: SearchPlaceIndexForTextRequestBody;
}


export class SearchPlaceIndexForTextResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  searchPlaceIndexForTextResponse?: shared.SearchPlaceIndexForTextResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
