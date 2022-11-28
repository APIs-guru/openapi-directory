import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTagsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class GetTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTagsPathParams;
}


export class GetTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TagModelHaljson })
  tagModelHaljsons?: shared.TagModelHaljson[];

  @SpeakeasyMetadata({ elemType: shared.TagModel })
  tagModels?: shared.TagModel[];
}
