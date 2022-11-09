import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DatabaseUpdateCollectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=collectionId" })
  collectionId: string;
}


export class DatabaseUpdateCollectionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=read" })
  read?: string[];

  @Metadata({ data: "json, name=rules" })
  rules?: string[];

  @Metadata({ data: "json, name=write" })
  write?: string[];
}


export class DatabaseUpdateCollectionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class DatabaseUpdateCollectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DatabaseUpdateCollectionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: DatabaseUpdateCollectionRequestBody;

  @Metadata()
  security: DatabaseUpdateCollectionSecurity;
}


export class DatabaseUpdateCollectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  collection?: shared.Collection;
}
