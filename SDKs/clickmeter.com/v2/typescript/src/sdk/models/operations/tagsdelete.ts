import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TagsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}


export class TagsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TagsDeletePathParams;
}


export class TagsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemObject?: Map<string, any>;
}
