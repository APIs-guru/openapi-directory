import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CollectionGetCollectionMetaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CollectionGetCollectionMetaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CollectionGetCollectionMetaPathParams;
}


export class CollectionGetCollectionMetaResponse extends SpeakeasyBase {
  @Metadata()
  bigOvenModelApi2CollectionInfo?: shared.BigOvenModelApi2CollectionInfo;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
