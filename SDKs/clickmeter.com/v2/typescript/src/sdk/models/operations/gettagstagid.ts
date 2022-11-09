import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTagsTagIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}


export class GetTagsTagIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTagsTagIdPathParams;
}


export class GetTagsTagIdResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreDtoTagsTag?: shared.ApiCoreDtoTagsTag;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
