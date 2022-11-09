import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}


export class UpdateTagRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  updateTagModel?: shared.UpdateTagModel;

  @Metadata({ data: "request, media_type=application/json" })
  updateTagModel1?: shared.UpdateTagModel;

  @Metadata({ data: "request, media_type=text/json" })
  updateTagModel2?: shared.UpdateTagModel;
}


export class UpdateTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateTagPathParams;

  @Metadata()
  request: UpdateTagRequests;
}


export class UpdateTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagModel?: shared.TagModel;

  @Metadata()
  tagModelHaljson?: shared.TagModelHaljson;
}
