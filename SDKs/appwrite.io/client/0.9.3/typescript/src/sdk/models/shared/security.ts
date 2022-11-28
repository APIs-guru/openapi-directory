import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeJwt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=X-Appwrite-JWT" })
  apiKey: string;
}


export class SchemeLocale extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=X-Appwrite-Locale" })
  apiKey: string;
}


export class SchemeProject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=X-Appwrite-Project" })
  apiKey: string;
}
