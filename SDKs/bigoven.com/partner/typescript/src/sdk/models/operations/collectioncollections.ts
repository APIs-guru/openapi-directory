import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CollectionCollectionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=test" })
  test?: string;
}


export class CollectionCollectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CollectionCollectionsQueryParams;
}


export class CollectionCollectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.BigOvenModelApi2CollectionInfo })
  bigOvenModelApi2CollectionInfos?: shared.BigOvenModelApi2CollectionInfo[];

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
