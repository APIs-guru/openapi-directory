import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DatabaseGetCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collectionId" })
  collectionId: string;
}


export class DatabaseGetCollectionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class DatabaseGetCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DatabaseGetCollectionPathParams;

  @SpeakeasyMetadata()
  security: DatabaseGetCollectionSecurity;
}


export class DatabaseGetCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  collection?: shared.Collection;
}
