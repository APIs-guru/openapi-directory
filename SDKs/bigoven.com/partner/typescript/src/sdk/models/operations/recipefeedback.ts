import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecipeFeedbackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;
}


export class RecipeFeedbackRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  api2ModelsRecipesFeedbackDto?: shared.Api2ModelsRecipesFeedbackDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ModelsRecipesFeedbackDto1?: shared.Api2ModelsRecipesFeedbackDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  api2ModelsRecipesFeedbackDto2?: shared.Api2ModelsRecipesFeedbackDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class RecipeFeedbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RecipeFeedbackPathParams;

  @SpeakeasyMetadata()
  request: RecipeFeedbackRequests;
}


export class RecipeFeedbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemObject?: Map<string, any>;
}
