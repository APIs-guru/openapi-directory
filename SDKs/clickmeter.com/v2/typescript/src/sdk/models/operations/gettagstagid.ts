import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTagsTagIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}


export class GetTagsTagIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTagsTagIdPathParams;
}


export class GetTagsTagIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoTagsTag?: shared.ApiCoreDtoTagsTag;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
