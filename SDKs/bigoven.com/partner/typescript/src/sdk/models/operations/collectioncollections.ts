import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CollectionCollectionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=test" })
  test?: string;
}


export class CollectionCollectionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CollectionCollectionsQueryParams;
}


export class CollectionCollectionsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.BigOvenModelApi2CollectionInfo })
  bigOvenModelApi2CollectionInfos?: shared.BigOvenModelApi2CollectionInfo[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
