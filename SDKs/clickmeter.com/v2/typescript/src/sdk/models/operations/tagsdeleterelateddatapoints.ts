import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TagsDeleteRelatedDatapointsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}


export class TagsDeleteRelatedDatapointsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TagsDeleteRelatedDatapointsPathParams;
}


export class TagsDeleteRelatedDatapointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
