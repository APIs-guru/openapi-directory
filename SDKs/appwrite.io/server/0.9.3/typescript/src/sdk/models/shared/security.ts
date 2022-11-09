import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeJwt extends SpeakeasyBase {
  @Metadata({ data: "security, name=X-Appwrite-JWT" })
  apiKey: string;
}


export class SchemeKey extends SpeakeasyBase {
  @Metadata({ data: "security, name=X-Appwrite-Key" })
  apiKey: string;
}


export class SchemeLocale extends SpeakeasyBase {
  @Metadata({ data: "security, name=X-Appwrite-Locale" })
  apiKey: string;
}


export class SchemeProject extends SpeakeasyBase {
  @Metadata({ data: "security, name=X-Appwrite-Project" })
  apiKey: string;
}
