import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CollectionsOnePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" })
  ecosystemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CollectionsOneRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CollectionsOnePathParams;
}


export class CollectionsOneResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCollectionResponse?: shared.GetCollectionResponse;

  @Metadata()
  statusCode: number;
}
