import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3CollectionsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3CollectionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetV3CollectionsHeaders;
}


export class GetV3CollectionsResponse extends SpeakeasyBase {
  @Metadata()
  collectionsList?: shared.CollectionsList;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
