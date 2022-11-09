import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListRecipesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListRecipesXAmzTargetEnum {
    AmazonPersonalizeListRecipes = "AmazonPersonalize.ListRecipes"
}


export class ListRecipesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListRecipesXAmzTargetEnum;
}


export class ListRecipesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListRecipesQueryParams;

  @Metadata()
  headers: ListRecipesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListRecipesRequest;
}


export class ListRecipesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  listRecipesResponse?: shared.ListRecipesResponse;

  @Metadata()
  statusCode: number;
}
