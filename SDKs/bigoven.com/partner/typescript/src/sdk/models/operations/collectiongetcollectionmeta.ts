import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CollectionGetCollectionMetaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CollectionGetCollectionMetaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CollectionGetCollectionMetaPathParams;
}


export class CollectionGetCollectionMetaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bigOvenModelApi2CollectionInfo?: shared.BigOvenModelApi2CollectionInfo;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
