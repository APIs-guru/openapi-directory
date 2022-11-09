import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RecipeFeedbackPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;
}


export class RecipeFeedbackRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  api2ModelsRecipesFeedbackDto?: shared.Api2ModelsRecipesFeedbackDto;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ModelsRecipesFeedbackDto1?: shared.Api2ModelsRecipesFeedbackDto;

  @Metadata({ data: "request, media_type=text/json" })
  api2ModelsRecipesFeedbackDto2?: shared.Api2ModelsRecipesFeedbackDto;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class RecipeFeedbackRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RecipeFeedbackPathParams;

  @Metadata()
  request: RecipeFeedbackRequests;
}


export class RecipeFeedbackResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemObject?: Map<string, any>;
}
