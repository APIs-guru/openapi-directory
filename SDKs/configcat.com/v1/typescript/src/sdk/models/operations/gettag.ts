import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}


export class GetTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTagPathParams;
}


export class GetTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tagModel?: shared.TagModel;

  @SpeakeasyMetadata()
  tagModelHaljson?: shared.TagModelHaljson;
}
