import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DatabaseCreateCollectionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=read" })
  read: string[];

  @Metadata({ data: "json, name=rules" })
  rules: string[];

  @Metadata({ data: "json, name=write" })
  write: string[];
}


export class DatabaseCreateCollectionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class DatabaseCreateCollectionRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: DatabaseCreateCollectionRequestBody;

  @Metadata()
  security: DatabaseCreateCollectionSecurity;
}


export class DatabaseCreateCollectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  collection?: shared.Collection;
}
