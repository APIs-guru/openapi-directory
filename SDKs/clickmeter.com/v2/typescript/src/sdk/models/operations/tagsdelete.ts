import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TagsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}


export class TagsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TagsDeletePathParams;
}


export class TagsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemObject?: Map<string, any>;
}
