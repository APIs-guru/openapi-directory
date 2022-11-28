import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3CollectionsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3CollectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetV3CollectionsHeaders;
}


export class GetV3CollectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collectionsList?: shared.CollectionsList;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
