import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class CreateTagRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  createTagModel?: shared.CreateTagModel;

  @Metadata({ data: "request, media_type=application/json" })
  createTagModel1?: shared.CreateTagModel;

  @Metadata({ data: "request, media_type=text/json" })
  createTagModel2?: shared.CreateTagModel;
}


export class CreateTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateTagPathParams;

  @Metadata()
  request: CreateTagRequests;
}


export class CreateTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagModel?: shared.TagModel;

  @Metadata()
  tagModelHaljson?: shared.TagModelHaljson;
}
