import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DatabaseUpdateCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collectionId" })
  collectionId: string;
}


export class DatabaseUpdateCollectionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=read" })
  read?: string[];

  @SpeakeasyMetadata({ data: "json, name=rules" })
  rules?: string[];

  @SpeakeasyMetadata({ data: "json, name=write" })
  write?: string[];
}


export class DatabaseUpdateCollectionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class DatabaseUpdateCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DatabaseUpdateCollectionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: DatabaseUpdateCollectionRequestBody;

  @SpeakeasyMetadata()
  security: DatabaseUpdateCollectionSecurity;
}


export class DatabaseUpdateCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  collection?: shared.Collection;
}
