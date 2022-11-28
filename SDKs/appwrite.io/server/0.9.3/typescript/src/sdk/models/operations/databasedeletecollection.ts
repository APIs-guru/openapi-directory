import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DatabaseDeleteCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collectionId" })
  collectionId: string;
}


export class DatabaseDeleteCollectionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class DatabaseDeleteCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DatabaseDeleteCollectionPathParams;

  @SpeakeasyMetadata()
  security: DatabaseDeleteCollectionSecurity;
}


export class DatabaseDeleteCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
