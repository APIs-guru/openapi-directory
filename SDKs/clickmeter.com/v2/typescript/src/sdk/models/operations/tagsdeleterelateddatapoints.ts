import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TagsDeleteRelatedDatapointsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}


export class TagsDeleteRelatedDatapointsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TagsDeleteRelatedDatapointsPathParams;
}


export class TagsDeleteRelatedDatapointsResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
