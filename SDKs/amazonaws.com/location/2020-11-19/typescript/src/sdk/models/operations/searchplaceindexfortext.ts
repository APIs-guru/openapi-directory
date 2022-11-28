import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchPlaceIndexForTextPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IndexName" })
  indexName: string;
}


export class SearchPlaceIndexForTextHeaders extends SpeakeasyBase {
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


export class SearchPlaceIndexForTextRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BiasPosition" })
  biasPosition?: number[];

  @SpeakeasyMetadata({ data: "json, name=FilterBBox" })
  filterBBox?: number[];

  @SpeakeasyMetadata({ data: "json, name=FilterCountries" })
  filterCountries?: string[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text: string;
}


export class SearchPlaceIndexForTextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SearchPlaceIndexForTextPathParams;

  @SpeakeasyMetadata()
  headers: SearchPlaceIndexForTextHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SearchPlaceIndexForTextRequestBody;
}


export class SearchPlaceIndexForTextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  searchPlaceIndexForTextResponse?: shared.SearchPlaceIndexForTextResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
