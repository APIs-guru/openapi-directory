import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DatabaseCreateCollectionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=read" })
  read: string[];

  @SpeakeasyMetadata({ data: "json, name=rules" })
  rules: string[];

  @SpeakeasyMetadata({ data: "json, name=write" })
  write: string[];
}


export class DatabaseCreateCollectionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class DatabaseCreateCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: DatabaseCreateCollectionRequestBody;

  @SpeakeasyMetadata()
  security: DatabaseCreateCollectionSecurity;
}


export class DatabaseCreateCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  collection?: shared.Collection;
}
