import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CollectionsOnePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" })
  ecosystemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CollectionsOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CollectionsOnePathParams;
}


export class CollectionsOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCollectionResponse?: shared.GetCollectionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
