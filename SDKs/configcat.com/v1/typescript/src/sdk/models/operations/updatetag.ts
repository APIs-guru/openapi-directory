import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}


export class UpdateTagRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  updateTagModel?: shared.UpdateTagModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updateTagModel1?: shared.UpdateTagModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  updateTagModel2?: shared.UpdateTagModel;
}


export class UpdateTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateTagPathParams;

  @SpeakeasyMetadata()
  request: UpdateTagRequests;
}


export class UpdateTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tagModel?: shared.TagModel;

  @SpeakeasyMetadata()
  tagModelHaljson?: shared.TagModelHaljson;
}
