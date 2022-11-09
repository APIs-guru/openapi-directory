import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class GetTagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTagsPathParams;
}


export class GetTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TagModelHaljson })
  tagModelHaljsons?: shared.TagModelHaljson[];

  @Metadata({ elemType: shared.TagModel })
  tagModels?: shared.TagModel[];
}
