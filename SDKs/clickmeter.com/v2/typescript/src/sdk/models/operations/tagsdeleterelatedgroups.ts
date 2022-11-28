import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TagsDeleteRelatedGroupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}


export class TagsDeleteRelatedGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TagsDeleteRelatedGroupsPathParams;
}


export class TagsDeleteRelatedGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
