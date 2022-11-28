import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class CreateTagRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  createTagModel?: shared.CreateTagModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createTagModel1?: shared.CreateTagModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  createTagModel2?: shared.CreateTagModel;
}


export class CreateTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateTagPathParams;

  @SpeakeasyMetadata()
  request: CreateTagRequests;
}


export class CreateTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tagModel?: shared.TagModel;

  @SpeakeasyMetadata()
  tagModelHaljson?: shared.TagModelHaljson;
}
